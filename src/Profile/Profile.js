import './../App.css';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = (props) => {
    // console.log(props)
    const Propn = (e) => {
        e.preventDefault();
        alert("you did it ^^ good job ")
    }


    return (
        <div className="main-page" >
            {/* <button onClick={Propn}>click on me </button> */}

            {/* <h3 onClick={Propn} > test </h3> */}
            <h3 style={{color:"bleu",}}>{props.Fn}</h3>
            <h3> {props.Bio} </h3>
            <h3> {props.Profession} </h3>
            <div> {props.children} </div>

            <Button variant="success" onClick={Propn}>Success</Button>{' '}

        </div>

    );
}
Profile.defaultProps = {
    Fn: "ben salah meriam ",
    Bio: "Mind your own bio",
    Profession: " full stack instructor ",
}
Profile.propTypes = {
    Fn: PropTypes.string,
    Bio: PropTypes.string,
    Profession: PropTypes.string,
    Propn: PropTypes.func,

}

export default Profile;