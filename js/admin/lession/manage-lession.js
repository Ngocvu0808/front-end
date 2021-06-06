import callApi from "./../../api-caller"


function getLession() {
    class CourseListPage extends Component {
        constructor(props) {
            super(props);
            this.state = {
                product: []
            };
        }
    
        ComponentDidMount() {
            callApi('lession', 'GET', null).then(response =>{
                this.setState({
                    product: response.data
                });
            });
        }
    
    }
        
}

function addLession(params) {
    class CourseListPage extends Component {
        constructor(props) {
            super(props);
            this.state = {
                product: []
            };
        }
    
        ComponentDidMount() {
            callApi('lession', 'GET', null).then(response =>{
                this.setState({
                    product: response.data
                });
            });
        }
    
    }
}
