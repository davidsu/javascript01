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


        var CartCell = React.createClass({displayName: "CartCell",
            getInitialState: function () {
                var cartItem = cart.getItemInChart(this.props.item.id);
                return {
                    qty: cartItem? cartItem.qty : 0
                };
            },
            addItem: function () {
                var cartInfo = cart.addToCart(this.props.item);
                if (!cartInfo.success) {
                    alert("can't sell you more or you'll get addicted!");// eslint-disable-line no-alert
                    return null;
                }
                totalManager.resetTotal();
                this.setState({qty: cartInfo.qty});
            },
            removeItem: function () {

                this.setState({qty: cart.removeFromCart(this.props.item).qty});
                totalManager.resetTotal();
            },
            render: function () {
                return (React.createElement("div", {className: "cell"}, 
                    React.createElement("button", {onClick: this.removeItem}, "-"), 
                    React.createElement("button", {onClick: this.addItem}, "+"), 
                    React.createElement("span", null, this.state.qty)
                ));
            }
        });
        var Cell = React.createClass({displayName: "Cell",
            getClassName: function () {
                return 'cell ' + this.props.columnName;
            },

            render: function () {
                return (React.createElement("div", {className: this.getClassName()}, this.props.item[this.props.columnName]));
            }
        });


        var Row = React.createClass({displayName: "Row",
            getClassName: function () {
                return 'row ' + this.props.item.getCtorName() +
                    (this.props.item.hasDiscount() ? ' coupon' : '')
            },
            render: function () {
                return (React.createElement("div", {className: this.getClassName()}, 
                    this.props.HEADERS.map(
                        function (columnName) {
                            switch (columnName) {
                                case 'cart':
                                    return React.createElement(CartCell, {item: this.props.item});
                                default:
                                    return React.createElement(Cell, {columnName: columnName, item: this.props.item})
                            }

                        }.bind(this))
                    
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