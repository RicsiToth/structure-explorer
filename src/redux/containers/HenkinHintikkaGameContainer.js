import {HenkinHintikkaGame} from '../../expressions_view/HenkinHintikkaGame'
import {connect} from "react-redux";
import {continueGame, endGame, setGameCommitment, setGameDomainChoice, setGameNextFormula} from "../actions";
import {getStructureObject} from "../selectors/structureObject";

const mapStateToProps = (state,props) => ({
    structureObject: getStructureObject(state)
});

const mapDispatchToProps = {
    setGameCommitment: setGameCommitment,
    setGameDomainChoice: setGameDomainChoice,
    continueGame: continueGame,
    endGame: endGame,
    setGameNextFormula: setGameNextFormula
};

const HenkinHintikkaGameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HenkinHintikkaGame);

export default HenkinHintikkaGameContainer;