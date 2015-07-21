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
            render: function () {
                return (React.createElement("div", null, "cell"));
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
                    _.forEach(
                        this.props.HEADERS,
                        function (columnName) {
                            return React.createElement(Cell, {columnName: columnName})
                        }
                    )
                ));
            }
        });

        var Headers = React.createClass({displayName: "Headers",
            getDefaultProps: function () {
                return {HEADERS: ['id', 'name', 'desc', 'price', 'cart']};
            },
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
            getInitialState: function () {
                return {
                    items: []
                };
            },
            render: function () {
                return (React.createElement("div", {className: "table main"}, 
                    React.createElement(Headers, null), 
                    _.map(
                        this.state.items,
                        function(item){
                            return React.createElement(Row, {item: item})
                        }
                    )
                ));
            }
        });


        function init(items) {
            React.render(React.createElement(Table, {items: items}), document.getElementById('tblContainer'));
        }


        return {
            Table: Table,
            init: init
        };

    }
);