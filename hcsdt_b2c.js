
var DataTableManager = {
    dbs: [],
    params: [],
    init: function (tableid, configs) {
        configs.sortable = typeof configs.sortable != 'undefined' ? configs.sortable : true;
        configs.organize = typeof configs.organize != 'undefined' ? configs.organize : false;
        configs.isResponsive = typeof configs.isResponsive != 'undefined' ? configs.isResponsive : false;
        DataTableManager.dbs[tableid] = configs;
        DataTableManager.params[tableid] = {
            page: 1,
            keyword: configs.searchKeyword,
            priority: configs.priority,
            from: configs.from,
            to: configs.to,
            pageSize: 10,
            format: (configs.format || 'tabular'),
            pagination: true,
            organize: false,
            sortField: configs.sortFieldDefault,
            sortValue: configs.sortFieldValue
        };
        DataTableManager.process(tableid);
    },
    initTable: function (tableid, configs) {
        var tables = "<style>.hcsdt{font-size:13px;font-family:verdana}</style>";
        if (configs.isPagination || configs.organize || configs.isSearch) {
            tables += "<div class='hcsdt-header'><div class='row'><div class='col-sm-5'><h4>" + configs.title + "</h4></div><div class='search col-sm-1'></div><div class='pagesize col-sm-2.5'></div><div class='pagination-container float-right col-sm-4'></div>" + (configs.organize ? "<div class='organize-container col-sm-1 text-right'><a class='btn btn-sm btn-outline-primary organizelink'><span class='hcsi hcsi-sort'></span></a><span id='" + tableid + "_organize'></span></div>" : "") + "</div></div>";
        }
        if (configs.isResponsive)
            tables += "<div class='table-responsive-sm text-nowrap' style='overflow-x: auto;'>";
        if (configs.format == 'tabular') {
            tables += "<table  cellpadding='0' cellspacing='0' border='0'  class='hcsdt table table-bordered'>";
            tables += "	<thead>";
            tables += "	<tr>";
            var columns = DataTableManager.dbs[tableid].columns;
            columns.forEach(function (item) {
                tables += "	   <th sortfield='" + (configs.sortable && item.sortable ? item.field : '') + "' class='" + (configs.sortable && item.sortable ? 'sortableheader sort' : '') + "'>" + item.title + "</th>";
            });
            tables += "	</tr>";
            tables += "   </thead>";
            tables += "   <tbody>";
            tables += "   </tbody>";
            tables += "</table>";
        } else {
            tables += "<div class='list-group table_tbody'></div>";
        }

        if (configs.isResponsive)
            tables += "</div>";
        tables += `<div class='hcsdt-footer'><div class='row'><div class='message col-sm-6'></div><div class='col-sm-6'>
				</div></div></div>`;
        $("#" + tableid).html(tables);
        $("#" + tableid + " .sortableheader").click(function () {
            $("#" + tableid + " .sortableheader").not(this).removeClass('sort-desc');
            $("#" + tableid + " .sortableheader").not(this).removeClass('sort-asc');
            $("#" + tableid + " .sortableheader").not(this).removeClass('sort');
            $("#" + tableid + " .sortableheader").not(this).addClass('sort');
            var fieldName = $(this).attr('sortfield');
            var fieldSort = 'asc';
            if (!($(this).hasClass('sort') || $(this).hasClass('sort-desc'))) {
                fieldSort = 'desc';
            }
            $("#" + tableid + " th[sortfield=" + fieldName + "]").removeClass('sort-asc');
            $("#" + tableid + " th[sortfield=" + fieldName + "]").removeClass('sort-desc');
            $("#" + tableid + " th[sortfield=" + fieldName + "]").removeClass('sort');
            $("#" + tableid + " th[sortfield=" + fieldName + "]").addClass('sort-' + fieldSort);
            DataTableManager.params[tableid].sortField = fieldName;
            DataTableManager.params[tableid].sortValue = fieldSort;
            DataTableManager.process(tableid);
        })
        $("#" + tableid + " .organize-container .organizelink").on('click', function () {
            DataTableManager.organize(tableid);
        })
        DataTableManager.loadSearch(tableid);
        DataTableManager.loadPageSize(tableid);
    },
    organize: function (tableid) {
        var configs = DataTableManager.dbs[tableid];
        if (configs.organize && configs.getOrganizeCollection) {
            configs.getOrganizeCollection(function (view, collection, sortField) {
                new AdminCommonUtil.OptionOrganizeView({ panel: '#' + tableid + '_organize', view: view, collection: collection, sortField: sortField });
            });
        }
    },
    getData: function (type, obj, fieldName, defaultValue) {
        type = type ? type : 'text';
        var data = obj[fieldName];
        var defaultValue = defaultValue ? defaultValue : '';
        if (type == 'object') {
            if (fieldName.indexOf('.') > -1) {
                var fields = fieldName.split('.');
                data = obj[fields[0]];
                for (var i = 1; i < fields.length; i++) {
                    data = data && data[fields[i]] ? data[fields[i]] : defaultValue;
                }
            } else {
                data = obj[fieldName] ? obj[fieldName] : defaultValue;
            }
        } else if (type == 'text') {
            data = data ? data : defaultValue;
        } else if (type == 'boolean') {
            data = data ? ((data + '').trim() == 'true') : false;
            if (data) {
                data = '<input type="checkbox" class="checkbox-readonly" checked="checked">'
            } else {
                data = '<input type="checkbox" class="checkbox-readonly">'
            }
        } else if (type == 'boolean_flag') {
            data = data ? data : defaultValue;
        } else if (type == 'number') {
            data = data ? parseInt(data) : defaultValue;
        } else if (type == 'date') {
            try { data = AdminCommonUtil.getInputDate(data) } catch (e) {
                data = data ? data : defaultValue;
            }
        }
        return data;
    },
    loadSearch: function (tableid) {
        var configs = DataTableManager.dbs[tableid];
        if (configs.isSearch) {
            var searchpayload = `<div class="input-group input-group-sm">
                            <input type="hidden" id="search_`+ tableid + `" value="` + (configs.searchKeyword ? configs.searchKeyword : '') + `" class="form-control" placeholder="Search....">
                                <span class="input-group-btn">
                                </span>
                        </div>`;
            jQuery("#" + tableid + " .hcsdt-header .search").html(searchpayload);
            jQuery("#search_" + tableid).keyup(function () {
                if (this.value && this.value.length >= 3) {
                    DataTableManager.params[tableid].keyword = this.value;
                    DataTableManager.params[tableid].page = 1;
                    DataTableManager.process(tableid);
                } else if (!this.value || this.value == '' || this.value.length < 3) {
                    DataTableManager.params[tableid].keyword = '';
                    DataTableManager.params[tableid].page = 1;
                    DataTableManager.process(tableid);
                }
            })
        }
    },
    loadPageSize: function (tableid, pageSize) {
        var configs = DataTableManager.dbs[tableid];
        if (configs.isSize && configs.title != 'KBKnowledge') {
            var pagesizepayload = `<div class="input-group input-group-sm">
                <a download="data.csv" href="/api/exportdata/tableid=`+ tableid + `/keyword=`+ configs.searchKeyword +`/priority=`+ configs.priority +`/from=`+ configs.from +`/to=`+ configs.to +`/sortValue=`+ configs.sortFieldValue +`/sortField=`+ configs.sortFieldDefault +`"><button class="hcsi hcsi-download btn btn-secondary" type="button" id="download_`+ tableid + `"></button></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label>Page Size</label>
                <select class="form-control" id="pagesize_`+ tableid + `"></select>
            </div>`;
            jQuery("#" + tableid + " .pagesize").html(pagesizepayload);
            jQuery("#pagesize_" + tableid + " option").remove();
            configs.pageSizes.forEach(function (item) {   
                jQuery("#pagesize_" + tableid).append(new Option(item, item));
            })
            if (pageSize) {
                jQuery("#pagesize_" + tableid).val(pageSize)
            }
            jQuery("#pagesize_" + tableid).change(function () {
                if (this.value) {
                    DataTableManager.params[tableid].page = 1;
                    DataTableManager.params[tableid].pageSize = this.value;
                    DataTableManager.process(tableid);
                }
            })
        }
        else {
            var pagesizepayload = `<div class="input-group input-group-sm">
                <label>Page Size</label>
                <select class="form-control" id="pagesize_`+ tableid + `"></select>
            </div>`;
            jQuery("#" + tableid + " .pagesize").html(pagesizepayload);
            jQuery("#pagesize_" + tableid + " option").remove();
            configs.pageSizes.forEach(function (item) {
                jQuery("#pagesize_" + tableid).append(new Option(item, item));
            })
            if (pageSize) {
                jQuery("#pagesize_" + tableid).val(pageSize)
            }
            jQuery("#pagesize_" + tableid).change(function () {
                if (this.value) {
                    DataTableManager.params[tableid].page = 1;
                    DataTableManager.params[tableid].pageSize = this.value;
                    DataTableManager.process(tableid);
                }
            })
        }
    },
    loadPagination: function (tableid, pageCount, currentPage, action) {
        var configs = DataTableManager.dbs[tableid];
        var paginatedItems = configs.paginatedItems;
        if (paginatedItems == null) {
            paginatedItems = 10;
        }
        var startValue = 0;
        var ctPage = parseInt(currentPage);
        if (action == 'prev') {
            ctPage = ctPage - paginatedItems;
        }
        var prevValue = 0;
        var nextValue = 0;
        if (Math.floor(ctPage / paginatedItems) == ctPage / paginatedItems) {
            startValue = ctPage + 1;
        } else {
            if (ctPage < paginatedItems) {
                startValue = 1;
            } else {
                startValue = Math.floor(ctPage / paginatedItems) * paginatedItems + 1;
            }

        }
        var endValue = startValue + paginatedItems;
        prevValue = startValue;
        if (endValue > pageCount) {
            endValue = pageCount + 1;
            prevValue = startValue - 1;
        }

        nextValue = endValue;
        var pageinationpayload = `<ul class="pagination float-right">
                <li>
                    <button id="`+ tableid + `_page_size_prev" value="` + (prevValue) + `" aria-label="Previous"><span aria-hidden="true">&laquo;</span></button>
                </li>
            `;

        for (var i = startValue; i < endValue; i++) {
            pageinationpayload += `<li id="` + tableid + `_page_size_` + i + `"><button value="` + i + `" class="` + (currentPage == i ? 'active' : '') + `">` + i + `</button></li>`
        }
        pageinationpayload += `   <li>
                    <button id="`+ tableid + `_page_size_next" value="` + (nextValue) + `"  aria-label="Next"><span aria-hidden="true">&raquo;</span></button>
                </li>
            </ul>`;
        jQuery("#" + tableid + " .pagination-container").html(pageinationpayload);
        jQuery("#" + tableid + "_page_size_prev").removeAttr('disabled');
        jQuery("#" + tableid + "_page_size_next").removeAttr('disabled');
        if (pageCount < 2) {
            jQuery("#" + tableid + "_page_size_prev").attr('disabled', 'disabled');
            jQuery("#" + tableid + "_page_size_next").attr('disabled', 'disabled');
        } else if (pageCount >= 2) {
            if (startValue == 1) {
                jQuery("#" + tableid + "_page_size_prev").attr('disabled', 'disabled');
                jQuery("#" + tableid + "_page_size_next").removeAttr('disabled');
                if (nextValue > pageCount) {
                    jQuery("#" + tableid + "_page_size_next").attr('disabled', 'disabled');
                }
            } else if (currentPage == pageCount || nextValue > pageCount) {
                jQuery("#" + tableid + "_page_size_next").attr('disabled', 'disabled');
                jQuery("#" + tableid + "_page_size_prev").removeAttr('disabled');
            }
        }
        jQuery("#" + tableid + " .pagination-container button").click(function () {
            DataTableManager.params[tableid].page = this.value;
            var elementId = this.id;
            var action = '';
            if (elementId.indexOf('_page_size_prev') > -1) {
                action = 'prev';
            } else {
                action = 'next'
            }
            DataTableManager.process(tableid, action);
        })
    },
    process: function (tableid, action) {
        var rows = "";
        var configs = DataTableManager.dbs[tableid];
        var params = DataTableManager.params[tableid];
        $('body').css({ 'cursor': 'progress' });
        configs.getData(params, function (dbdata) {
            $('body').css({ 'cursor': 'auto' });
            var columns = DataTableManager.dbs[tableid].columns;
            if (dbdata.data.length > 0) {
                DataTableManager.initTable(tableid, configs);
                DataTableManager.loadPagination(tableid, dbdata.pages, dbdata.currentPage, action);
                DataTableManager.loadPageSize(tableid, params.pageSize);
                jQuery("#pagesize_" + tableid + " option:contains(ALL)").val(dbdata.resultCount);
                dbdata.data.forEach(function (di) {
                    di = di.get ? di.attributes : di;
                    if (configs.format == 'tabular') {
                        rows += "<tr>";
                        columns.forEach(function (item) {
                            if (item.type == 'action') {
                                rows += "	   <td>";
                                item.actions.forEach(function (action) {
                                    rows += "<span " + (action.class ? "class='" + action.class + "'" : "") + " id='" + (action.name ? action.name : "") + "_" + di[configs.idField ? configs.idField : 'sys_id'] + "'>" + (action.title ? action.title : "") + "</span> ";
                                });
                                rows += "	   </td>";
                            } else {
                                rows += "	   <td><div class='" + (item.class ? item.class : '') + "'>" + DataTableManager.getData(item.type, di, item.field, item.defaultValue) + "</div></td>";
                            }
                        });
                        rows += "</tr>";
                    } else {
                        rows += `<div class="list-group-item list-group-item-action"><div class="d-flex w-100 justify-content-between">`;
                        columns.forEach(function (item) {
                            if (item.primary && item.primary == 'true') {
                                rows += `<h5 class="mb-1">`;
                                var text = DataTableManager.getData(item.type, di, item.field, item.defaultValue);
                                columns.forEach(function (aItem) {
                                    if (aItem.type == 'action') {
                                        aItem.actions.forEach(function (action) {
                                            if (action.name == 'view')
                                                rows += "<span style='cursor:pointer' class='text-danger " + (action.name ? action.name : "") + "_" + di[configs.idField ? configs.idField : 'sys_id'] + "'>" + (text) + "</span> ";
                                        });
                                    }
                                });
                                rows += "</h5>";
                            }
                        });
                        columns.forEach(function (item) {
                            if (item.type == 'action') {
                                rows += "	   <small>";
                                item.actions.forEach(function (action) {
                                    rows += "<span " + " class='" + action.class + " " + (action.name ? action.name : "") + "_" + di[configs.idField ? configs.idField : 'sys_id'] + "'>" + (action.title ? action.title : "") + "</span> ";
                                });
                                rows += "	   </small>";
                            }
                        });
                        rows += `</div><small>`;
                        columns.forEach(function (item) {
                            if (!item.primary && item.type != 'action') {
                                rows += `<span>`;
                                rows += DataTableManager.getData(item.type, di, item.field, item.defaultValue);
                                rows += "</span> * ";
                            }
                        });
                        rows += `</small></div>`;

                    }
                })
            } else {
                if (configs.title == 'ProbTasks' || configs.title == 'ReqTasks' || configs.title == 'ReqItems' || configs.title == 'ChangeTasks') {
                    DataTableManager.initTable(tableid, configs);
                    rows += '<tr><td colspan="' + columns.length + '">' + (typeof configs.noRecordMessage != 'undefined' && configs.noRecordMessage ? configs.noRecordMessage : 'No Related Tickets') + '</td></tr>'
                } else {
                    configs.isPagination = false;
                    configs.organize = false;
                    configs.isSearch = false;
                    configs.isResponsive = false;
                    DataTableManager.initTable(tableid, configs);
                    rows += '<tr style="margin-left:40%"><td colspan="' + columns.length + '">' + (typeof configs.noRecordMessage != 'undefined' && configs.noRecordMessage ? configs.noRecordMessage :
                        '<div class="empty-state"> <div class="empty-state__content"><div class="empty-state__icon"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqSy4ynWtoj__rI4xHPwJMUUXEnmk8sT_sg&usqp=CAU" alt=""></div><br><div class="empty-state__message">No Related Tickets.</div></div></div>') + '</td></tr>'
                }
            }
            if (configs.format == 'tabular') {
                jQuery("#" + tableid + " table tbody").html(rows);
            } else {
                jQuery("#" + tableid + " .table_tbody").html(rows);
            }
            dbdata.data.forEach(function (model) {
                di = model.get ? model.attributes : model;
                columns.forEach(function (item) {
                    if (item.type == 'action') {
                        item.actions.forEach(function (action) {
                            $("#" + (action.name ? action.name : "") + "_" + (di[configs.idField ? configs.idField : 'sys_id'])).click(function () {
                                action.action.call(model);
                            });
                            $("." + (action.name ? action.name : "") + "_" + (di[configs.idField ? configs.idField : 'sys_id'])).click(function () {
                                action.action.call(model);
                            });
                        });
                    }
                });
            });
        });
    }
};    
