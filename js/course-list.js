import callApi from './api-caller';

class CourseListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        };
    }

    ComponentDidMount() {
        callApi('course', 'GET', null).then(response =>{
            this.setState({
                product: response.data
            });
        });
    }
}