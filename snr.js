var SNRModel = {
    KBAttachment: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/sys_attachment.do'
    }),
    Attachment: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/api/attachments'
    }),
    DataExport: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/api/exportdata'
    }),
    SysJournalField: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/api/sysjournalfields'
    }),
    AllTicket: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/api/alltickets'
    }),
    Incident: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/api/incidents'
    }),
    Problem: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/api/problems'
    }),
    ProbTask: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/api/probtasks'
    }),
    Request: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/api/requests'
    }),
    ReqItem: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/api/reqitems'
    }),
    ReqTask: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/api/reqtasks'
    }),
    ChangeRequest: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/api/changerequests'
    }),
    ChangeTask: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/api/changetasks'
    }),
    KBKnowledge: Backbone.Model.extend({
        idAttribute: 'sys_id',
        urlRoot: '/api/kbknowledge'
    })
}

var SNRConfig = {
    renderAllTicketTable: function (view, isHeader) {
        return {
            isPagination: view.isHeader,
            isNext: view.isHeader,
            isPrev: view.isHeader,
            title: 'All Tickets',
            format: 'unstruct',//tabular
            searchKeyword: view.keyword,
            priority: view.priority,
            from: view.from,
            to: view.to,
            isSearch: view.isHeader,
            minLengthOfTextToSearch: 3,
            isSize: view.isHeader,
            pageSizes: ["10", "25"],
            defaultPageSize: "10",
            sortFieldDefault: "opened_at",
            sortFieldValue: "asc",
            idField: "sys_id",
            getData: function (params, callback) {
                view.renderMessages(params, callback, 'ticket');
            },
            columns: [{
                "field": "number",
                "title": "Ticket#",
                "sortable": true,
                "type": "text",
                "primary": "true"
            }, {
                "field": "short_description",
                "title": "Short Description",
                "sortable": true,
                "type": "text"
            }, {
                "field": "dv_sys_class_name",
                "title": "Class",
                "sortable": true,
                "type": "text"
            }, {
                "field": "opened_at",
                "title": "Created Date",
                "sortable": true,
                "type": "text"
            }, {
                "field": "actions",
                "title": "Actions",
                "sortable": false,
                "type": "action",
                "actions": [{
                    "name": "view", "class": "hcsi hcsi-view", "action": function () {
                        view.editTicket(new SNRCollection.AllTicket(this));
                    }
                }]
            }]
        };
    },
    renderIncidentTable: function (view, isHeader) {
        return {
            isPagination: view.isHeader,
            isNext: view.isHeader,
            isPrev: view.isHeader,
            title: 'Incidents',
            format: 'unstruct',//tabular
            searchKeyword: view.keyword,
            priority: view.priority,
            from: view.from,
            to: view.to,
            isSearch: view.isHeader,
            minLengthOfTextToSearch: 3,
            isSize: view.isHeader,
            pageSizes: ["10", "25"],
            defaultPageSize: "10",
            sortFieldDefault: "opened_at",
            sortFieldValue: "asc",
            idField: "sys_id",
            getData: function (params, callback) {
                view.renderMessages(params, callback, 'incident');
            },
            columns: [{
                "field": "number",
                "title": "Ticket#",
                "sortable": true,
                "type": "text",
                "primary": "true"
            }, {
                "field": "short_description",
                "title": "Short Description",
                "sortable": true,
                "type": "text"
            }, {
                "field": "dv_sys_class_name",
                "title": "Class",
                "sortable": true,
                "type": "text"
            }, {
                "field": "category",
                "title": "Category",
                "sortable": true,
                "type": "text"
            }, {
                "field": "opened_at",
                "title": "Created Date",
                "sortable": true,
                "type": "text"
            }, {
                "field": "actions",
                "title": "Actions",
                "sortable": false,
                "type": "action",
                "actions": [{
                    "name": "view", "class": "hcsi hcsi-view", "action": function () {
                        view.editIncident(new SNRCollection.Incident(this));
                    }
                }]
            }]
        };
    },
    renderProblemTable: function (view, isHeader) {
        return {
            isPagination: view.isHeader,
            isNext: view.isHeader,
            isPrev: view.isHeader,
            title: 'Problems',
            format: 'unstruct',//tabular
            searchKeyword: view.keyword,
            priority: view.priority,
            from: view.from,
            to: view.to,
            isSearch: view.isHeader,
            minLengthOfTextToSearch: 3,
            isSize: view.isHeader,
            pageSizes: ["10", "25"],
            defaultPageSize: "10",
            sortFieldDefault: "opened_at",
            sortFieldValue: "asc",
            idField: "sys_id",
            getData: function (params, callback) {
                view.renderMessages(params, callback, 'problem');
            },
            columns: [{
                "field": "number",
                "title": "Ticket#",
                "sortable": true,
                "type": "text",
                "primary": "true"
            }, {
                "field": "short_description",
                "title": "Short Description",
                "sortable": true,
                "type": "text"
            }, {
                "field": "dv_sys_class_name",
                "title": "Class",
                "sortable": true,
                "type": "text"
            }, {
                "field": "opened_at",
                "title": "Created Date",
                "sortable": true,
                "type": "text"
            }, {
                "field": "actions",
                "title": "Actions",
                "sortable": false,
                "type": "action",
                "actions": [{
                    "name": "view", "class": "hcsi hcsi-view", "action": function () {
                        view.editProblem(new SNRCollection.Problem(this));
                    }
                }]
            }],
        };
    },
    renderProbTaskTable: function (view, isHeader) {
        return {
            isPagination: view.isHeader,
            isNext: view.isHeader,
            isPrev: view.isHeader,
            title: 'ProbTasks',
            format: 'unstruct',//tabular
            searchKeyword: view.keyword,
            priority: view.priority,
            from: view.from,
            to: view.to,
            isSearch: view.isHeader,
            minLengthOfTextToSearch: 3,
            isSize: view.isHeader,
            pageSizes: ["10", "25"],
            defaultPageSize: "10",
            sortFieldDefault: "number",
            sortFieldValue: "asc",
            idField: "sys_id",
            getData: function (params, callback) {
                view.renderMessages(params, callback, 'probtask');
            },
            columns: [{
                "field": "number",
                "title": "Ticket#",
                "sortable": true,
                "type": "text",
                "primary": "true"
            }, {
                "field": "short_description",
                "title": "Short Description",
                "sortable": true,
                "type": "text"
            }, {
                "field": "dv_sys_class_name",
                "title": "Class",
                "sortable": true,
                "type": "text"
            }, {
                "field": "opened_at",
                "title": "Created Date",
                "sortable": true,
                "type": "text"
            }, {
                "field": "actions",
                "title": "Actions",
                "sortable": false,
                "type": "action",
                "actions": [{
                    "name": "view", "class": "hcsi hcsi-view", "action": function () {
                        view.editProbTask(new SNRCollection.ProbTask(this));
                    }
                }]
            }],
        };
    },
    renderRequestTable: function (view, isHeader) {
        return {
            isPagination: view.isHeader,
            isNext: view.isHeader,
            isPrev: view.isHeader,
            title: 'Requests',
            format: 'unstruct',//tabular
            searchKeyword: view.keyword,
            priority: view.priority,
            from: view.from,
            to: view.to,
            isSearch: view.isHeader,
            minLengthOfTextToSearch: 3,
            isSize: view.isHeader,
            pageSizes: ["10", "25"],
            defaultPageSize: "10",
            sortFieldDefault: "opened_at",
            sortFieldValue: "asc",
            idField: "sys_id",
            getData: function (params, callback) {
                view.renderMessages(params, callback, 'request');
            },
            columns: [{
                "field": "number",
                "title": "Ticket#",
                "sortable": true,
                "type": "text",
                "primary": "true"
            }, {
                "field": "short_description",
                "title": "Short Description",
                "sortable": true,
                "type": "text"
            }, {
                "field": "dv_sys_class_name",
                "title": "Class",
                "sortable": true,
                "type": "text"
            }, {
                "field": "opened_at",
                "title": "Created Date",
                "sortable": true,
                "type": "text"
            }, {
                "field": "actions",
                "title": "Actions",
                "sortable": false,
                "type": "action",
                "actions": [{
                    "name": "view", "class": "hcsi hcsi-view", "action": function () {
                        view.editRequest(new SNRCollection.Request(this));
                    }
                }]
            }],
        };
    },
    renderReqItemTable: function (view, isHeader) {
        return {
            isPagination: view.isHeader,
            isNext: view.isHeader,
            isPrev: view.isHeader,
            title: 'ReqItems',
            format: 'unstruct',//tabular
            searchKeyword: view.keyword,
            priority: view.priority,
            from: view.from,
            to: view.to,
            isSearch: view.isHeader,
            minLengthOfTextToSearch: 3,
            isSize: view.isHeader,
            pageSizes: ["10", "25"],
            defaultPageSize: "10",
            sortFieldDefault: "number",
            sortFieldValue: "asc",
            idField: "sys_id",
            getData: function (params, callback) {
                view.renderMessages(params, callback, 'reqitem');
            },
            columns: [{
                "field": "number",
                "title": "Ticket#",
                "sortable": true,
                "type": "text",
                "primary": "true"
            }, {
                "field": "short_description",
                "title": "Short Description",
                "sortable": true,
                "type": "text"
            }, {
                "field": "dv_sys_class_name",
                "title": "Class",
                "sortable": true,
                "type": "text"
            }, {
                "field": "opened_at",
                "title": "Created Date",
                "sortable": true,
                "type": "text"
            }, {
                "field": "actions",
                "title": "Actions",
                "sortable": false,
                "type": "action",
                "actions": [{
                    "name": "view", "class": "hcsi hcsi-view", "action": function () {
                        view.editReqItem(new SNRCollection.ReqItem(this));
                    }
                }]
            }],
        };
    },
    renderReqTaskTable: function (view, isHeader) {
        return {
            isPagination: view.isHeader,
            isNext: view.isHeader,
            isPrev: view.isHeader,
            title: 'ReqTasks',
            format: 'unstruct',//tabular
            searchKeyword: view.keyword,
            priority: view.priority,
            from: view.from,
            to: view.to,
            isSearch: view.isHeader,
            minLengthOfTextToSearch: 3,
            isSize: view.isHeader,
            pageSizes: ["10", "25"],
            defaultPageSize: "10",
            sortFieldDefault: "number",
            sortFieldValue: "asc",
            idField: "sys_id",
            getData: function (params, callback) {
                view.renderMessages(params, callback, 'reqtask');
            },
            columns: [{
                "field": "number",
                "title": "Ticket#",
                "sortable": true,
                "type": "text",
                "primary": "true"
            }, {
                "field": "short_description",
                "title": "Short Description",
                "sortable": true,
                "type": "text"
            }, {
                "field": "dv_sys_class_name",
                "title": "Class",
                "sortable": true,
                "type": "text"
            }, {
                "field": "opened_at",
                "title": "Created Date",
                "sortable": true,
                "type": "text"
            }, {
                "field": "actions",
                "title": "Actions",
                "sortable": false,
                "type": "action",
                "actions": [{
                    "name": "view", "class": "hcsi hcsi-view", "action": function () {
                        view.editReqTask(new SNRCollection.ReqTask(this));
                    }
                }]
            }],
        };
    },
    renderChangeRequestTable: function (view, isHeader) {
        return {
            isPagination: view.isHeader,
            isNext: view.isHeader,
            isPrev: view.isHeader,
            title: 'ChangeRequests',
            format: 'unstruct',//tabular
            searchKeyword: view.keyword,
            priority: view.priority,
            from: view.from,
            to: view.to,
            isSearch: view.isHeader,
            minLengthOfTextToSearch: 3,
            isSize: view.isHeader,
            pageSizes: ["10", "25"],
            defaultPageSize: "10",
            sortFieldDefault: "opened_at",
            sortFieldValue: "asc",
            idField: "sys_id",
            getData: function (params, callback) {
                view.renderMessages(params, callback, 'changerequest');
            },
            columns: [{
                "field": "number",
                "title": "Ticket#",
                "sortable": true,
                "type": "text",
                "primary": "true"
            }, {
                "field": "short_description",
                "title": "Short Description",
                "sortable": true,
                "type": "text"
            }, {
                "field": "dv_sys_class_name",
                "title": "Class",
                "sortable": true,
                "type": "text"
            }, {
                "field": "category",
                "title": "Category",
                "sortable": true,
                "type": "text"
            }, {
                "field": "opened_at",
                "title": "Created Date",
                "sortable": true,
                "type": "text"
            }, {
                "field": "actions",
                "title": "Actions",
                "sortable": false,
                "type": "action",
                "actions": [{
                    "name": "view", "class": "hcsi hcsi-view", "action": function () {
                        view.editChangeRequest(new SNRCollection.ChangeRequest(this));
                    }
                }]
            }],
        };
    },
    renderChangeTaskTable: function (view, isHeader) {
        return {
            isPagination: view.isHeader,
            isNext: view.isHeader,
            isPrev: view.isHeader,
            title: 'ChangeTasks',
            format: 'unstruct',//tabular
            searchKeyword: view.keyword,
            priority: view.priority,
            from: view.from,
            to: view.to,
            isSearch: view.isHeader,
            minLengthOfTextToSearch: 3,
            isSize: view.isHeader,
            pageSizes: ["10", "25"],
            defaultPageSize: "10",
            sortFieldDefault: "number",
            sortFieldValue: "asc",
            idField: "sys_id",
            getData: function (params, callback) {
                view.renderMessages(params, callback, 'changetask');
            },
            columns: [{
                "field": "number",
                "title": "Ticket#",
                "sortable": true,
                "type": "text",
                "primary": "true"
            }, {
                "field": "short_description",
                "title": "Short Description",
                "sortable": true,
                "type": "text"
            }, {
                "field": "dv_sys_class_name",
                "title": "Class",
                "sortable": true,
                "type": "text"
            }, {
                "field": "opened_at",
                "title": "Created Date",
                "sortable": true,
                "type": "text"
            }, {
                "field": "actions",
                "title": "Actions",
                "sortable": false,
                "type": "action",
                "actions": [{
                    "name": "view", "class": "hcsi hcsi-view", "action": function () {
                        view.editChangeTask(new SNRCollection.ChangeTask(this));
                    }
                }]
            }],
        };
    },
    renderKBKnowledgeTable: function (view, isHeader) {
        return {
            isPagination: view.isHeader,
            isNext: view.isHeader,
            isPrev: view.isHeader,
            title: 'KBKnowledge',
            format: 'unstruct',//tabular
            searchKeyword: view.keyword,
            from: view.from,
            to: view.to,
            isSearch: view.isHeader,
            minLengthOfTextToSearch: 3,
            isSize: view.isHeader,
            pageSizes: ["10", "25"],
            defaultPageSize: "10",
            sortFieldDefault: "number",
            sortFieldValue: "asc",
            idField: "sys_id",
            getData: function (params, callback) {
                view.renderMessages(params, callback, 'kbknowledge');
            },
            columns: [{
                "field": "number",
                "title": "Ticket#",
                "sortable": true,
                "type": "text",
                "primary": "true"
            }, {
                "field": "short_description",
                "title": "Short Description",
                "sortable": true,
                "type": "text"
            }, {
                "field": "dv_author",
                "title": "Author",
                "sortable": true,
                "type": "text"
            }, {
                "field": "dv_kb_category",
                "title": "Category",
                "sortable": true,
                "type": "text"
            }, {
                "field": "sys_created_on",
                "title": "Sys Created On",
                "sortable": true,
                "type": "text"
            }, {
                "field": "actions",
                "title": "Actions",
                "sortable": false,
                "type": "action",
                "actions": [{
                    "name": "view", "class": "hcsi hcsi-view", "action": function () {
                        view.editKBKnowledge(new SNRCollection.KBKnowledge(this));
                    }
                }]
            }]
        };
    }
}

var SNRCollection = {
    KBAttachment: SNRModel.KBAttachment,
    KBAttachments: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.KBAttachment,
        idAttribute: 'sys_id',
        url: '/sys_attachment.do'
    }),
    Attachment: SNRModel.Attachment,
    Attachments: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.Attachment,
        idAttribute: 'sys_id',
        url: '/api/attachments'
    }),
    DataExport: SNRModel.DataExport,
    DataExports: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.DataExport,
        idAttribute: 'sys_id',
        url: '/api/exportdata/'
    }),
    SysJournalField: SNRModel.SysJournalField,
    SysJournalFields: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.SysJournalField,
        comparator: 'created_datetime',
        idAttribute: 'sys_id',
        url: '/api/sysjournalfields'
    }),
    AllTicket: SNRModel.AllTicket,
    AllTickets: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.AllTicket,
        idAttribute: 'sys_id',
        url: '/api/alltickets'
    }),
    Incident: SNRModel.Incident,
    Incidents: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.Incident,
        idAttribute: 'sys_id',
        url: '/api/incidents'
    }),
    Problem: SNRModel.Problem,
    Problems: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.Problem,
        idAttribute: 'sys_id',
        url: '/api/problems'
    }),
    ProbTask: SNRModel.ProbTask,
    ProbTasks: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.ProbTask,
        idAttribute: 'sys_id',
        url: '/api/probtasks'
    }),
    Request: SNRModel.Request,
    Requests: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.Request,
        idAttribute: 'sys_id',
        url: '/api/requests'
    }),
    ReqItem: SNRModel.ReqItem,
    ReqItems: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.ReqItem,
        idAttribute: 'sys_id',
        url: '/api/reqitems'
    }),
    ReqTask: SNRModel.ReqTask,
    ReqTasks: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.ReqTask,
        idAttribute: 'sys_id',
        url: '/api/reqtasks'
    }),
    ChangeRequest: SNRModel.ChangeRequest,
    ChangeRequests: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.ChangeRequest,
        idAttribute: 'sys_id',
        url: '/api/changerequests'
    }),
    ChangeTask: SNRModel.ChangeTask,
    ChangeTasks: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.ChangeTask,
        idAttribute: 'sys_id',
        url: '/api/changetasks'
    }),
    KBKnowledge: SNRModel.KBKnowledge,
    KBKnowledges: Backbone.Collection.extend({
        modelId: function (attrs) {
            return attrs.sys_id;
        },
        model: SNRModel.KBKnowledge,
        idAttribute: 'sys_id',
        url: '/api/kbknowledge'
    })
}

var SNRView = {
    views: [],
    ticketconfigs: [],
    getTemplate: function () {
        return SNRView.views['/view/ticket_detail.html'];
    },
    getFieldMapping: function () {
        return JSON.parse(SNRView.ticketconfigs['/TicketConfigs/FieldMapping.json']);
    },
    getGrouping: function () {
        return JSON.parse(SNRView.ticketconfigs['/TicketConfigs/Grouping.json']);
    },
    ApplicationView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.keyword = options.keyword;
            this.priority = options.priority;
            this.from = options.from;
            this.to = options.to;
            this.activeTab = options.activeTab || (localStorage.getItem('application-detail-tabs') == null ? 'all-tab' : localStorage.getItem('application-detail-tabs').substring(1));
            localStorage.setItem('application-detail-tabs', '#' + this.activeTab);
            this.render();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ title: this.title }));
            $(this.panel).html(this.el);
            var self = this;
            var localStorageTabName = localStorage.getItem('application-detail-tabs');
            if (localStorageTabName == '#all-tab') {
                this.openAll();
                $('#all-tab').trigger('click');
            } else if (localStorageTabName == '#incidents-tab') {
                this.openIncidents();
                $('#incidents-tab').trigger('click');
            } else if (localStorageTabName == '#problems-tab') {
                this.openProblems();
                $('#problems-tab').trigger('click');
            } else if (localStorageTabName == '#requests-tab') {
                this.openRequests();
                $('#requests-tab').trigger('click');
            } else if (localStorageTabName == '#changes-tab') {
                this.openChanges();
                $('#changes-tab').trigger('click');
            } else if (localStorageTabName == '#knowledgebase-tab') {
                this.openKnowledgeBase();
                $('#knowledgebase-tab').trigger('click');
            }
            $('#search-input').unbind('click');
            $('#search-ticket').unbind('click');
            // $('#search-input').change(function (event) {
            //     self.search(event);
            // });
            $('#search-ticket').click(function (event) {
                self.search(event);
            });
            $('#from-date').unbind('click');
            $('#to-date').unbind('click');
            $('#priority').unbind('click');
            $('#search-input-all').unbind('click');
            $('#search-ticket-all').unbind('click');
            // $('#search-input-all').change(function (event) {
            //     self.search(event);
            // });
            $('#search-ticket-all').click(function (event) {
                self.search(event);
            });
            $('#search-input-inc').unbind('click');
            $('#search-ticket-inc').unbind('click');
            // $('#search-input-inc').change(function (event) {
            //     self.search(event);
            // });
            $('#search-ticket-inc').click(function (event) {
                self.search(event);
            });
            $('#search-input-prob').unbind('click');
            $('#search-ticket-prob').unbind('click');
            // $('#search-input-prob').change(function (event) {
            //     self.search(event);
            // });
            $('#search-ticket-prob').click(function (event) {
                self.search(event);
            });
            $('#search-input-req').unbind('click');
            $('#search-ticket-req').unbind('click');
            // $('#search-input-req').change(function (event) {
            //     self.search(event);
            // });
            $('#search-ticket-req').click(function (event) {
                self.search(event);
            });
            $('#search-input-chg').unbind('click');
            $('#search-ticket-chg').unbind('click');
            // $('#search-input-chg').change(function (event) {
            //     self.search(event);
            // });
            $('#search-ticket-chg').click(function (event) {
                self.search(event);
            });
            $('#search-input-kb').unbind('click');
            $('#search-ticket-kb').unbind('click');
            // $('#search-input-kb').change(function (event) {
            //     self.search(event);
            // });
            $('#search-ticket-kb').click(function (event) {
                self.search(event);
            });
            this.delegateEvents({
                'click #application-detail-tabs a': 'tabClick',
                'click #all-tab': 'openAll',
                'click #incidents-tab': 'openIncidents',
                'click #problems-tab': 'openProblems',
                'click #requests-tab': 'openRequests',
                'click #changes-tab': 'openChanges',
                'click #knowledgebase-tab': 'openKnowledgeBase',
                'click #search-ticket': 'search',
                'click #from-date': 'search',
                'click #to-date': 'search',
                'click #priority': 'search',
                //'change #search-input': 'search',
                // 'change #search-input-all': 'search',
                'click #search-ticket-all': 'search',
                //'change #search-input-inc': 'search',
                'click #search-ticket-inc': 'search',
                //'change #search-input-prob': 'search',
                'click #search-ticket-prob': 'search',
                //'change #search-input-req': 'search',
                'click #search-ticket-req': 'search',
               //'change #search-input-chg': 'search',
                'click #search-ticket-chg': 'search',
                //'change #search-input-kb': 'search',
                'click #search-ticket-kb': 'search'
            });
            this.tabClick({ target: $('#' + localStorage.getItem('application-detail-tabs').substring(1)).parent()[0] })
        },
        search: function (event) {
            document.getElementById('search-input').value = $('#search-input').val() || $('#search-input-all').val() || $('#search-input-inc').val() || $('#search-input-prob').val() || $('#search-input-req').val() || $('#search-input-chg').val() || $('#search-input-kb').val();
            this.keyword = $('#search-input').val();
            this.priority = $('#priority').val();
            this.from = $('#from-date').val();
            this.to = $('#to-date').val();
            this.render();
        },
        tabClick: function (event) {
            $('#application-detail-tabs .nav-link').removeClass('active');
            $(event.target).addClass('active');
            $(event.target).find('.nav-link').addClass('active');
        },
        openAll: function () {
            localStorage.setItem('application-detail-tabs', '#all-tab');
            var keyword = $('#search-input').val() || $('#search-input-all').val();
            var priority = $('#priority').val();
            var fromDate = $('#from-date').val();
            var toDate = $('#to-date').val();
            if (keyword.length > 0 || priority!=0 || fromDate.length > 0 || toDate.length > 0)
                var profile = new SNRView.AllView({ isHeader: true, view: this, panel: '#all-tab-content', keyword: this.keyword, priority: this.priority, from: this.from, to: this.to });
        },
        openIncidents: function () {
            localStorage.setItem('application-detail-tabs', '#incidents-tab');
            var keyword = $('#search-input').val() || $('#search-input-inc').val();
            var priority = $('#priority').val();
            var fromDate = $('#from-date').val();
            var toDate = $('#to-date').val();
            if (keyword.length > 0 || priority!=0 || fromDate.length > 0 || toDate.length > 0)
                var profile = new SNRView.IncidentView({ isHeader: true, view: this, panel: '#incidents-tab-content', keyword: this.keyword, priority: this.priority, from: this.from, to: this.to });
        },
        openProblems: function () {
            localStorage.setItem('application-detail-tabs', '#problems-tab');
            var keyword = $('#search-input').val() || $('#search-input-prob').val();
            var priority = $('#priority').val();
            var fromDate = $('#from-date').val();
            var toDate = $('#to-date').val();
            if (keyword.length > 0 || priority!=0 || fromDate.length > 0 || toDate.length > 0)
                var profile = new SNRView.ProblemView({ isHeader: false, view: this, panel: '#problems-tab-content', keyword: this.keyword, priority: this.priority, from: this.from, to: this.to });
        },
        openRequests: function () {
            localStorage.setItem('application-detail-tabs', '#requests-tab');
            var keyword = $('#search-input').val() || $('#search-input-req').val();
            var priority = $('#priority').val();
            var fromDate = $('#from-date').val();
            var toDate = $('#to-date').val();
            if (keyword.length > 0 || priority!=0 || fromDate.length > 0 || toDate.length > 0)
                var profile = new SNRView.RequestView({ isHeader: true, view: this, panel: '#requests-tab-content', keyword: this.keyword, priority: this.priority, from: this.from, to: this.to });
        },
        openChanges: function () {
            localStorage.setItem('application-detail-tabs', '#changes-tab');
            var keyword = $('#search-input').val() || $('#search-input-chg').val();
            var priority = $('#priority').val();
            var fromDate = $('#from-date').val();
            var toDate = $('#to-date').val();
            if (keyword.length > 0 || priority!=0 || fromDate.length > 0 || toDate.length > 0)
                var profile = new SNRView.ChangeRequestView({ isHeader: true, view: this, panel: '#changes-tab-content', keyword: this.keyword, priority: this.priority, from: this.from, to: this.to });
        },
        openKnowledgeBase: function () {
            localStorage.setItem('application-detail-tabs', '#knowledgebase-tab');
            var keyword = $('#search-input').val() || $('#search-input-kb').val();
            var fromDate = $('#from-date').val();
            var toDate = $('#to-date').val();
            if (keyword.length > 0 || fromDate.length > 0 || toDate.length > 0)
                var profile = new SNRView.KBKnowledgeView({ isHeader: true, view: this, panel: '#knowledgebase-tab-content', keyword: this.keyword, from: this.from, to: this.to });
        },
        getTemplate: function () {
            return SNRView.views['/view/application_detail.html'];
        }
    }),
    AllView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.isHeader = options.isHeader;
            this.view = options.view;
            this.keyword = options.keyword;
            this.priority = options.priority;
            this.from = options.from;
            this.to = options.to;
            this.render();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ configs: this.configs }));
            $(this.panel).html(this.el);
            this.openPaginatedList();
        },
        openPaginatedList: function () {
            var self = this;
            DataTableManager.init("all_ticket_container", SNRConfig.renderAllTicketTable(self));
        },
        renderMessages: function (params, callback, type) {
            this.collection = new SNRCollection.AllTickets();
            this.collection.fetch({
                data: params,
                success: function (collection, response, options) {
                    callback(response);
                },
                error: function () {
                    console.log('Error while rendering... tickets.');
                }
            });
        },
        editTicket: function (model) {
            var number = model.get('number');
            if (number.startsWith("INC")) {
                var detail = new SNRView.IncidentDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
            else if (number.startsWith("PRB")) {
                var detail = new SNRView.ProblemDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
            else if (number.startsWith("PTASK")) {
                var detail = new SNRView.ProbTaskDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
            else if (number.startsWith("REQ")) {
                var detail = new SNRView.RequestDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
            else if (number.startsWith("TASK")) {
                var detail = new SNRView.ReqTaskDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
            else if (number.startsWith("RITM")) {
                var detail = new SNRView.ReqItemDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
            else if (number.startsWith("CHG")) {
                var detail = new SNRView.ChangeRequestDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
            else {
                var detail = new SNRView.ChangeTaskDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
        },
        getTemplate: function () {
            return SNRView.views['/view/all_list.html'];
        }
    }),
    ActivityView: Backbone.View.extend({
        getTemplate: function () {
            return SNRView.views['/view/activity.html'];
        },
        initialize: function (options) {
            this.panel = options.panel;
            this.isHeader = options.isHeader;
            this.view = options.view;
            this.model = options.model;
            this.renderMessages();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ data: this.collection.toJSON() }));
            $(this.panel).html(this.el);
        },
        renderMessages: function () {
            this.collection = new SNRCollection.SysJournalFields();
            var self = this;
            var params = {};
            params.sys_id = self.model.get('sys_id');
            this.collection.fetch({
                data: params,
                success: function (collection, response, options) {
                    // callback(response);
                    self.render();
                },
                error: function () {
                    console.log('Error while rendering... sysjournalfields.');
                }
            });
        }
    }),
    AttachmentView: Backbone.View.extend({
        getTemplate: function () {
            return SNRView.views['/view/attachment.html'];
        },
        initialize: function (options) {
            this.panel = options.panel;
            this.isHeader = options.isHeader;
            this.view = options.view;
            this.model = options.model;
            this.renderMessages();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ attachment_data: this.collection.toJSON() }));
            $(this.panel).html(this.el);
        },
        renderMessages: function () {
            this.collection = new SNRCollection.Attachments();
            var self = this;
            var params = {};
            params.number = self.model.get('number');
            this.collection.fetch({
                data: params,
                success: function (collection, response, options) {
                    // callback(response);
                    self.render();
                },
                error: function () {
                    console.log('Error while rendering... Attachments.');
                }
            });
        }
    }),
    KBAttachmentView: Backbone.View.extend({
        getTemplate: function () {
            return SNRView.views['/view/attachment.html'];
        },
        initialize: function (options) {
            this.panel = options.panel;
            this.isHeader = options.isHeader;
            this.view = options.view;
            this.model = options.model;
            // this.renderMessages();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ data: this.collection.toJSON() }));
            $(this.panel).html(this.el);
        },
        renderMessages: function () {
            this.collection = new SNRCollection.KBAttachments(); var self = this;
            var params = {};
            params.sys_id = self.model.get('sys_id');
            this.collection.fetch({
                data: params,
                success: function (collection, response, options) {
                    // callback(response);
                    self.render();
                },
                error: function () {
                    console.log('Error while rendering... KBAttachments.');
                }
            });
        }
    }),
    IncidentView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.isHeader = options.isHeader || true;
            this.view = options.view;
            this.keyword = options.keyword;
            this.priority = options.priority;
            this.from = options.from;
            this.to = options.to;
            this.render();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ configs: this.configs }));
            $(this.panel).html(this.el);
            this.openPaginatedList();
        },
        openPaginatedList: function () {
            var self = this;
            var dbconfig = SNRConfig.renderIncidentTable(self);
            DataTableManager.init("incident_list_container", dbconfig);
        },
        renderMessages: function (params, callback, type) {
            this.collection = new SNRCollection.Incidents();
            var self = this;
            this.collection.fetch({
                data: params,
                success: function (collection, response, options) {
                    callback(response);
                },
                error: function () {
                    console.log('Error while rendering... incidents.');
                }
            });
        },
        editIncident: function (model) {
            var detail = new SNRView.IncidentDetailView({ panel: this.view.panel, view: this.view, model: model });
        },
        getTemplate: function () {
            return SNRView.views['/view/incident_list.html'];
        }
    }),
    IncidentDetailView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.model = options.model;
            this.view = options.view;
            this.renderMessages();
        },
        render: function () {
            this.template = _.template(SNRView.getTemplate());
            this.$el.html(this.template({ entity: this.model.attributes, fields: SNRView.getFieldMapping(), groups: SNRView.getGrouping() }));
            $(this.panel).html(this.el);
            this.attachmentView = new SNRView.AttachmentView({ model: this.model, panel: '.attachment' });
            this.activityView = new SNRView.ActivityView({ model: this.model, panel: '.activity' });
            $(document).scrollTop(0);
            this.delegateEvents({
                'click .button_back': 'cancel'
            });
        },
        renderMessages: function () {
            var self = this;
            var params = {};
            params.number = self.model.get('number');
            this.model.fetch({
                data: params,
                success: function (collection, response, options) {
                    // callback(response);
                    self.render();
                },
                error: function () {
                    console.log('Error while rendering...incidentdetail.');
                }
            });
        },
        cancel: function () {
            this.view.render();
        }
    }),
    ProblemView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.isHeader = options.isHeader || true;
            this.view = options.view;
            this.keyword = options.keyword;
            this.priority = options.priority;
            this.from = options.from;
            this.to = options.to;
            this.render();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ configs: this.configs }));
            $(this.panel).html(this.el);
            this.openPaginatedList();
        },
        openPaginatedList: function () {
            var self = this;
            var dbconfig = SNRConfig.renderProblemTable(self);
            DataTableManager.init("problem_list_container", dbconfig);
        },
        renderMessages: function (params, callback, type) {
            this.collection = new SNRCollection.Problems();
            var self = this;
            this.collection.fetch({
                data: params,
                success: function (collection, response, options) {
                    callback(response);
                },
                error: function () {
                    console.log('Error while rendering... problems.');
                }
            });
        },
        editProblem: function (model) {
            var number = model.get('number');
            if (number.startsWith("PRB")) {
                var detail = new SNRView.ProblemDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
            else {
                var detail = new SNRView.ProbTaskDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
        },
        getTemplate: function () {
            return SNRView.views['/view/problem_list.html'];
        }
    }),
    ProblemDetailView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.model = options.model;
            this.view = options.view;
            this.renderMessages();
        },
        render: function () {
            this.template = _.template(SNRView.getTemplate());
            this.$el.html(this.template({ entity: this.model.attributes, fields: SNRView.getFieldMapping(), groups: SNRView.getGrouping() }));
            $(this.panel).html(this.el);
            this.attachmentView = new SNRView.AttachmentView({ model: this.model, panel: '.attachment' });
            this.activityView = new SNRView.ActivityView({ model: this.model, panel: '.activity' });
            this.problemtaskView = new SNRView.ProbTaskView({ model: this.model, view: this, panel: '.probtask_list_container' });
            $(document).scrollTop(0);
            this.delegateEvents({
                'click .button_back': 'cancel'
            });
        },
        renderMessages: function () {
            var self = this;
            var params = {};
            params.number = self.model.get('number');
            this.model.fetch({
                data: params,
                success: function (collection, response, options) {
                    // callback(response);
                    self.render();
                },
                error: function () {
                    console.log('Error while rendering...problemdetail.');
                }
            });
        },
        cancel: function () {
            this.view.render();
        }
    }),
    ProbTaskView: Backbone.View.extend({
        initialize: function (options) {
            this.model = options.model;
            this.panel = options.panel;
            this.isHeader = options.isHeader || false;
            this.view = options.view;
            this.keyword = options.keyword;
            this.priority = options.priority;
            this.from = options.from;
            this.to = options.to;
            this.render();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ configs: this.configs }));
            $(this.panel).html(this.el);
            this.openPaginatedList();
        },
        openPaginatedList: function () {
            var self = this;
            var dbconfig = SNRConfig.renderProbTaskTable(self);
            DataTableManager.init("probtask_list_container", dbconfig);
        },
        renderMessages: function (params, callback, type) {
            this.collection = new SNRCollection.ProbTasks();
            var self = this;
            params.number = self.model.get('number');
            this.collection.fetch({
                data: params,
                success: function (collection, response, options) {
                    callback(response);
                },
                error: function () {
                    console.log('Error while rendering... problemtasks.');
                }
            });
        },
        editProbTask: function (model) {
            var detail = new SNRView.ProbTaskDetailView({ panel: this.view.panel, view: this.view, model: model });
        },
        getTemplate: function () {
            return SNRView.views['/view/probtask_list.html'];
        }
    }),
    ProbTaskDetailView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.model = options.model;
            this.view = options.view;
            this.renderMessages();
        },
        render: function () {
            this.template = _.template(SNRView.getTemplate());
            this.$el.html(this.template({ entity: this.model.attributes, fields: SNRView.getFieldMapping(), groups: SNRView.getGrouping() }));
            $(this.panel).html(this.el);
            this.attachmentView = new SNRView.AttachmentView({ model: this.model, panel: '.attachment' });
            this.activityView = new SNRView.ActivityView({ model: this.model, panel: '.activity' });
            $(document).scrollTop(0);
            this.delegateEvents({
                'click .button_back': 'cancel'
            });
        },
        renderMessages: function () {
            var self = this;
            var params = {};
            params.number = self.model.get('number');
            this.model.fetch({
                data: params,
                success: function (collection, response, options) {
                    // callback(response);
                    self.render();
                },
                error: function () {
                    console.log('Error while rendering...probtaskdetail.');
                }
            });
        },
        cancel: function () {
            this.view.render();
        }
    }),
    RequestView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.isHeader = options.isHeader;
            this.view = options.view;
            this.keyword = options.keyword;
            this.priority = options.priority;
            this.from = options.from;
            this.to = options.to;
            this.render();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ configs: this.configs }));
            $(this.panel).html(this.el);
            this.openPaginatedList();
        },
        openPaginatedList: function () {
            var self = this;
            var dbconfig = SNRConfig.renderRequestTable(self);
            DataTableManager.init("request_list_container", dbconfig);
        },
        renderMessages: function (params, callback, type) {
            this.collection = new SNRCollection.Requests();
            var self = this;
            this.collection.fetch({
                data: params,
                success: function (collection, response, options) {
                    callback(response);
                },
                error: function () {
                    console.log('Error while rendering... requests.');
                }
            });
        },
        editRequest: function (model) {
            var number = model.get('number');
            if (number.startsWith("REQ")) {
                var detail = new SNRView.RequestDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
            else if (number.startsWith("TASK")) {
                var detail = new SNRView.ReqTaskDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
            else {
                var detail = new SNRView.ReqItemDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
        },
        getTemplate: function () {
            return SNRView.views['/view/request_list.html'];
        }
    }),
    RequestDetailView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.model = options.model;
            this.view = options.view;
            this.renderMessages();
        },
        render: function () {
            this.template = _.template(SNRView.getTemplate());
            this.$el.html(this.template({ entity: this.model.attributes, fields: SNRView.getFieldMapping(), groups: SNRView.getGrouping() }));
            $(this.panel).html(this.el);
            this.attachmentView = new SNRView.AttachmentView({ model: this.model, panel: '.attachment' });
            this.activityView = new SNRView.ActivityView({ model: this.model, panel: '.activity' });
            this.reqitemtaskView = new SNRView.ReqItemView({ model: this.model, view: this, panel: '.req_list_container' });
            $(document).scrollTop(0);
            this.delegateEvents({
                'click .button_back': 'cancel'
            });
        },
        renderMessages: function () {
            var self = this;
            var params = {};
            params.number = self.model.get('number');
            this.model.fetch({
                data: params,
                success: function (collection, response, options) {
                    // callback(response);
                    self.render();
                },
                error: function () {
                    console.log('Error while rendering...requestdetail.');
                }
            });
        },
        cancel: function () {
            this.view.render();
        }
    }),
    ReqItemView: Backbone.View.extend({
        initialize: function (options) {
            this.model = options.model;
            this.panel = options.panel;
            this.isHeader = options.isHeader || false;
            this.view = options.view;
            this.keyword = options.keyword;
            this.priority = options.priority;
            this.from = options.from;
            this.to = options.to;
            this.render();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ configs: this.configs }));
            $(this.panel).html(this.el);
            this.openPaginatedList();
        },
        openPaginatedList: function () {
            var self = this;
            var dbconfig = SNRConfig.renderReqItemTable(self);
            DataTableManager.init("reqitem_list_container", dbconfig);
        },
        renderMessages: function (params, callback, type) {
            this.collection = new SNRCollection.ReqItems();
            var self = this;
            params.number = self.model.get('number');
            this.collection.fetch({
                data: params,
                success: function (collection, response, options) {
                    callback(response);
                },
                error: function () {
                    console.log('Error while rendering... requests.');
                }
            });
        },
        editReqItem: function (model) {
            var number = model.get('number');
            if (number.startsWith("RITM")) {
                var detail = new SNRView.ReqItemDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
            else {
                var detail = new SNRView.ReqTaskDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
        },
        getTemplate: function () {
            return SNRView.views['/view/reqitem_list.html'];
        }
    }),
    ReqItemDetailView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.model = options.model;
            this.view = options.view;
            this.renderMessages();
        },
        render: function () {
            this.template = _.template(SNRView.getTemplate());
            this.$el.html(this.template({ entity: this.model.attributes, fields: SNRView.getFieldMapping(), groups: SNRView.getGrouping() }));
            $(this.panel).html(this.el);
            this.attachmentView = new SNRView.AttachmentView({ model: this.model, panel: '.attachment' });
            this.activityView = new SNRView.ActivityView({ model: this.model, panel: '.activity' });
            this.reqtaskView = new SNRView.ReqTaskView({ model: this.model, view: this, panel: '.reqtask_list_container' });
            $(document).scrollTop(0);
            this.delegateEvents({
                'click .button_back': 'cancel'
            });
        },
        renderMessages: function () {
            var self = this;
            var params = {};
            params.number = self.model.get('number');
            this.model.fetch({
                data: params,
                success: function (collection, response, options) {
                    // callback(response);
                    self.render();
                },
                error: function () {
                    console.log('Error while rendering...reqitemdetail.');
                }
            });
        },
        cancel: function () {
            this.view.render();
        }
    }),
    ReqTaskView: Backbone.View.extend({
        initialize: function (options) {
            this.model = options.model;
            this.panel = options.panel;
            this.isHeader = options.isHeader || false;
            this.view = options.view;
            this.keyword = options.keyword;
            this.priority = options.priority;
            this.from = options.from;
            this.to = options.to;
            this.render();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ configs: this.configs }));
            $(this.panel).html(this.el);
            this.openPaginatedList();
        },
        openPaginatedList: function () {
            var self = this;
            var dbconfig = SNRConfig.renderReqTaskTable(self);
            DataTableManager.init("reqtask_list_container", dbconfig);
        },
        renderMessages: function (params, callback, type) {
            this.collection = new SNRCollection.ReqTasks();
            var self = this;
            params.number = self.model.get('number');
            this.collection.fetch({
                data: params,
                success: function (collection, response, options) {
                    callback(response);
                },
                error: function () {
                    console.log('Error while rendering... requests.');
                }
            });
        },
        editReqTask: function (model) {
            var detail = new SNRView.ReqTaskDetailView({ panel: this.view.panel, view: this.view, model: model });
        },
        getTemplate: function () {
            return SNRView.views['/view/reqtask_list.html'];
        }
    }),
    ReqTaskDetailView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.model = options.model;
            this.view = options.view;
            this.renderMessages();
        },
        render: function () {
            this.template = _.template(SNRView.getTemplate());
            this.$el.html(this.template({ entity: this.model.attributes, fields: SNRView.getFieldMapping(), groups: SNRView.getGrouping() }));
            $(this.panel).html(this.el);
            this.attachmentView = new SNRView.AttachmentView({ model: this.model, panel: '.attachment' });
            this.activityView = new SNRView.ActivityView({ model: this.model, panel: '.activity' });
            $(document).scrollTop(0);
            this.delegateEvents({
                'click .button_back': 'cancel'
            });
        },
        renderMessages: function () {
            var self = this;
            var params = {};
            params.number = self.model.get('number');
            this.model.fetch({
                data: params,
                success: function (collection, response, options) {
                    // callback(response);
                    self.render();
                },
                error: function () {
                    console.log('Error while rendering...reqtaskdetail.');
                }
            });
        },
        cancel: function () {
            this.view.render();
        }
    }),
    ChangeRequestView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.isHeader = options.isHeader || true;
            this.view = options.view;
            this.keyword = options.keyword;
            this.priority = options.priority;
            this.from = options.from;
            this.to = options.to;
            this.render();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ configs: this.configs }));
            $(this.panel).html(this.el);
            this.openPaginatedList();
        },
        openPaginatedList: function () {
            var self = this;
            var dbconfig = SNRConfig.renderChangeRequestTable(self);
            DataTableManager.init("changerequest_list_container", dbconfig);
        },
        renderMessages: function (params, callback, type) {
            this.collection = new SNRCollection.ChangeRequests();
            var self = this;
            this.collection.fetch({
                data: params,
                success: function (collection, response, options) {
                    callback(response);
                },
                error: function () {
                    console.log('Error while rendering... changerequests.');
                }
            });
        },
        editChangeRequest: function (model) {
            var number = model.get('number');
            if (number.startsWith("CHG")) {
                var detail = new SNRView.ChangeRequestDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
            else {
                var detail = new SNRView.ChangeTaskDetailView({ panel: this.view.panel, view: this.view, model: model });
            }
        },
        getTemplate: function () {
            return SNRView.views['/view/changerequest_list.html'];
        }
    }),
    ChangeRequestDetailView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.model = options.model;
            this.view = options.view;
            this.renderMessages();
        },
        render: function () {
            this.template = _.template(SNRView.getTemplate());
            this.$el.html(this.template({ entity: this.model.attributes, fields: SNRView.getFieldMapping(), groups: SNRView.getGrouping() }));
            $(this.panel).html(this.el);
            this.attachmentView = new SNRView.AttachmentView({ model: this.model, panel: '.attachment' });
            this.activityView = new SNRView.ActivityView({ model: this.model, panel: '.activity' });
            this.changetaskView = new SNRView.ChangeTaskView({ model: this.model, view: this, panel: '.changetask_list_container' });
            $(document).scrollTop(0);
            this.delegateEvents({
                'click .button_back': 'cancel'
            });
        },
        renderMessages: function () {
            var self = this;
            var params = {};
            params.number = self.model.get('number');
            this.model.fetch({
                data: params,
                success: function (collection, response, options) {
                    // callback(response);
                    self.render();
                },
                error: function () {
                    console.log('Error while rendering...changerequestdetail.');
                }
            });
        },
        cancel: function () {
            this.view.render();
        }
    }),
    ChangeTaskView: Backbone.View.extend({
        initialize: function (options) {
            this.model = options.model;
            this.panel = options.panel;
            this.isHeader = options.isHeader || false;
            this.view = options.view;
            this.keyword = options.keyword;
            this.priority = options.priority;
            this.from = options.from;
            this.to = options.to;
            this.render();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ configs: this.configs }));
            $(this.panel).html(this.el);
            this.openPaginatedList();
        },
        openPaginatedList: function () {
            var self = this;
            var dbconfig = SNRConfig.renderChangeTaskTable(self);
            DataTableManager.init("changetask_list_container", dbconfig);
        },
        renderMessages: function (params, callback, type) {
            this.collection = new SNRCollection.ChangeTasks();
            var self = this;
            params.number = self.model.get('number');
            this.collection.fetch({
                data: params,
                success: function (collection, response, options) {
                    callback(response);
                },
                error: function () {
                    console.log('Error while rendering... changetasks.');
                }
            });
        },
        editChangeTask: function (model) {
            var detail = new SNRView.ChangeTaskDetailView({ panel: this.view.panel, view: this.view, model: model });
        },
        getTemplate: function () {
            return SNRView.views['/view/changetask_list.html'];
        }
    }),
    ChangeTaskDetailView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.model = options.model;
            this.view = options.view;
            this.renderMessages();
        },
        render: function () {
            this.template = _.template(SNRView.getTemplate());
            this.$el.html(this.template({ entity: this.model.attributes, fields: SNRView.getFieldMapping(), groups: SNRView.getGrouping() }));
            $(this.panel).html(this.el);
            this.attachmentView = new SNRView.AttachmentView({ model: this.model, panel: '.attachment' });
            this.activityView = new SNRView.ActivityView({ model: this.model, panel: '.activity' });
            $(document).scrollTop(0);
            this.delegateEvents({
                'click .button_back': 'cancel'
            });
        },
        renderMessages: function () {
            var self = this;
            var params = {};
            params.number = self.model.get('number');
            this.model.fetch({
                data: params,
                success: function (collection, response, options) {
                    // callback(response);
                    self.render();
                },
                error: function () {
                    console.log('Error while rendering...changetaskdetail.');
                }
            });
        },
        cancel: function () {
            this.view.render();
        }
    }),
    KBKnowledgeView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.isHeader = options.isHeader || true;
            this.view = options.view;
            this.keyword = options.keyword;
            this.from = options.from;
            this.to = options.to;
            this.render();
        },
        render: function () {
            this.template = _.template(this.getTemplate());
            this.$el.html(this.template({ configs: this.configs }));
            $(this.panel).html(this.el);
            this.openPaginatedList();
        },
        openPaginatedList: function () {
            var self = this;
            var dbconfig = SNRConfig.renderKBKnowledgeTable(self);
            DataTableManager.init("kbknowledge_list_container", dbconfig);
        },
        renderMessages: function (params, callback, type) {
            this.collection = new SNRCollection.KBKnowledges();
            var self = this;
            this.collection.fetch({
                data: params,
                success: function (collection, response, options) {
                    callback(response);
                },
                error: function () {
                    console.log('Error while rendering... KBKnowledges.');
                }
            });
        },
        editKBKnowledge: function (model) {
            var detail = new SNRView.KBKnowledgeDetailView({ panel: this.view.panel, view: this.view, model: model });
        },
        getTemplate: function () {
            return SNRView.views['/view/kbknowledge_list.html'];
        }
    }),
    KBKnowledgeDetailView: Backbone.View.extend({
        initialize: function (options) {
            this.panel = options.panel;
            this.model = options.model;
            this.view = options.view;
            this.subView = new SNRView.KBAttachmentView({ model: this.model });
            this.renderMessages();
        },
        render: function () {
            this.template = _.template(SNRView.getTemplate());
            this.$el.html(this.template({ entity: this.model.attributes, fields: SNRView.getFieldMapping(), groups: SNRView.getGrouping() }));
            $(this.panel).html(this.el);
            $(document).scrollTop(0);
            this.delegateEvents({
                'click .button_back': 'cancel'
            });
        },
        renderMessages: function () {
            var self = this;
            var params = {};
            params.number = self.model.get('number');
            this.model.fetch({
                data: params,
                success: function (collection, response, options) {
                    // callback(response);
                    self.render();
                },
                error: function () {
                    console.log('Error while rendering...kbknowledgedetail.');
                }
            });
        },
        cancel: function () {
            this.view.render();
        }
    })
}

var SNRManager = {
    init: function (views, ticketconfigs) {
        SNRView.views = views;
        SNRView.ticketconfigs = ticketconfigs;
        SNRManager.showTicketList();
    },
    showTicketList: function () {
        var reports = new SNRView.ApplicationView({ panel: '#reportcontainer' });
    }
}
