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

        var Row = React.createClass({
            propTypes:{},
            mixins:[],
            statics:{},
            shouldComponentUpdate:function(){
                return true;
            },
            componentWillUpdate:function(){},
            componentDidUpdate:function(){},
            componentWillUnmount:function(){},
            getInitialState: function(){
                return {};
            },
            getDefaultProps:function(){
                return {};
            },
            componentWillMount:function(){},
            componentDidMount: function(){},
            componentWillReceiveProps:function(nextProps){
                //this.setState({});
            },
            getClassName: function(){
                return 'row ' + this.props.item.getCtorName() +
                    (this.props.item.hasDiscount() ? ' coupon' : '')
            },
            render: function(){
                return(<div></div>);
            }
        });

        var Headers = React.createClass({
            HEADERS: ['id', 'name', 'desc', 'price', 'cart'],
            render: function () {
                return (<div className='heading'>
                        {
                            this.HEADERS.map(function (header) {
                                    var className = 'cell '+ header;
                                    return(<div className={className}>
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
            getInitialState: function(){
                return {
                    items: []
                };
            },
            render: function(){
                return(<div className='table main'>
                    <Headers></Headers>
                </div>);
            }
        });



        function init(items){
            React.render(<Table />, document.getElementById('tblContainer'));
        }




        return {
            Table: Table,
            init: init
        };

    }
);