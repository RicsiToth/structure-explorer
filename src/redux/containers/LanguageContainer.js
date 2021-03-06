import {connect} from 'react-redux';
import {lockLanguageComponent, setConstants, setFunctions, setPredicates} from "../actions";
import Language from '../../math_view/components/Language';
import {lockConstants, lockFunctions, lockPredicates} from "../actions";

const mapStateToProps = (state) => ({
  language: state.language,
  teacherMode: state.common.teacherMode
});

const mapDispatchToProps = {
  setConstants: setConstants,
  setPredicates: setPredicates,
  setFunctions: setFunctions,
  lockConstants: lockConstants,
  lockPredicates: lockPredicates,
  lockFunctions: lockFunctions,
  lockLanguageComponent: lockLanguageComponent
};

const LanguageContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(Language);

export default LanguageContainer;