define(
    [
        '../lib/lodash.js',
        '../cart.js',
        '../dom/mainTbl.js',
        '../tblUtils.js',
        '../managers/total.js',
        '../lib/react.js',
        '../lib/JSXTransformer.js'
    ],
    function (_, cart, domMainTblHelper, tblUtils, totalManager) {

        var Cell = React.createClass({displayName: "Cell",
            propTypes: {},
            mixins: [],
            statics: {},
            shouldComponentUpdate: function () {
                return true;
            },
            componentWillUpdate: function () {
            },
            componentDidUpdate: function () {
            },
            componentWillUnmount: function () {
            },
            getInitialState: function () {
                return {};
            },
            getDefaultProps: function () {
                return {};
            },
            componentWillMount: function () {
            },
            componentDidMount: function () {
            },
            componentWillReceiveProps: function (nextProps) {
                //this.setState({});
            },
            getClassName: function () {
                return 'cell ' + this.props.columnName;
            },
            render: function () {
                return (React.createElement("div", null, this.props.columnName));
            }
        });


        var Row = React.createClass({displayName: "Row",
            propTypes: {},
            mixins: [],
            statics: {},
            shouldComponentUpdate: function () {
                return true;
            },
            componentWillUpdate: function () {
            },
            componentDidUpdate: function () {
            },
            componentWillUnmount: function () {
            },
            getInitialState: function () {
                return {};
            },
            getDefaultProps: function () {
                return {};
            },
            componentWillMount: function () {
            },
            componentDidMount: function () {
            },
            componentWillReceiveProps: function (nextProps) {
                //this.setState({});
            },
            getClassName: function () {
                return 'row ' + this.props.item.getCtorName() +
                    (this.props.item.hasDiscount() ? ' coupon' : '')
            },
            render: function () {
                return (React.createElement("div", {className: this.getClassName()}, 
                    this.props.HEADERS.map(
                        function (columnName) {
                            return React.createElement(Cell, {columnName: columnName})
                        })
                    
                ));
            }
        });

        var Headers = React.createClass({displayName: "Headers",

            render: function () {
                return (React.createElement("div", {className: "heading"}, 
                        
                            this.props.HEADERS.map(function (header) {
                                    var className = 'cell ' + header;
                                    return (React.createElement("div", {className: className}, 
                                        header
                                    ))
                                }
                            )
                        
                    )
                );
            }
        });

        var Table = React.createClass({displayName: "Table",
            propTypes: {
                items: React.PropTypes.array
            },
            getDefaultProps: function () {
                return {HEADERS: ['id', 'name', 'desc', 'price', 'cart']};
            },
            render: function () {
                return (React.createElement("div", {className: "table main"}, 
                    React.createElement(Headers, {HEADERS: this.props.HEADERS}), 
                    _.map(
                        this.props.items,
                        function (item) {
                            return React.createElement(Row, {item: item, HEADERS: this.props.HEADERS})
                        }.bind(this)
                    )
                ));
            }
        });


        function reRender(items) {
            React.render(React.createElement(Table, {items: items}), document.getElementById('tblContainer'))
        }

        function init(items) {
            reRender(items);
        }

        var tbl = React.createElement(Table, null);


        return {
            Table: tbl,
            reRender: reRender,
            init: init
        };

    }
);