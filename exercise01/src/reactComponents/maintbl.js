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

        var Cell = React.createClass({
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
                return (<div className={this.getClassName()}>{this.props.item[this.props.columnName]}</div>);
            }
        });


        var Row = React.createClass({
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
                return (<div className={this.getClassName()}>
                    {this.props.HEADERS.map(
                        function (columnName) {
                            return <Cell columnName={columnName} item={this.props.item}/>
                        }.bind(this))
                    }
                </div>);
            }
        });

        var Headers = React.createClass({

            render: function () {
                return (<div className='heading'>
                        {
                            this.props.HEADERS.map(function (header) {
                                    var className = 'cell ' + header;
                                    return (<div className={className}>
                                        {header}
                                    </div>)
                                }
                            )
                        }
                    </div>
                );
            }
        });

        var Table = React.createClass({
            propTypes: {
                items: React.PropTypes.array
            },
            getDefaultProps: function () {
                return {HEADERS: ['id', 'name', 'desc', 'price', 'cart']};
            },
            render: function () {
                return (<div className='table main'>
                    <Headers HEADERS={this.props.HEADERS}></Headers>
                    {_.map(
                        this.props.items,
                        function (item) {
                            return <Row item={item} HEADERS={this.props.HEADERS}/>
                        }.bind(this)
                    )}
                </div>);
            }
        });


        function reRender(items) {
            React.render(<Table items={items}/>, document.getElementById('tblContainer'))
        }

        function init(items) {
            reRender(items);
        }

        var tbl = <Table />;


        return {
            Table: tbl,
            reRender: reRender,
            init: init
        };

    }
);