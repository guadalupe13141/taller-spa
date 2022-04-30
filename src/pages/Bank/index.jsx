import {useDispatch, useSelector} from "react-redux";
import {depositar, retirar} from "../../store/actions/accountActions";
import {Container} from "react-bootstrap"

function Bank(){
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state.account);

    return(
      <Container>
        <button onClick={()=> {
          dispatch(depositar(100))
        }}> Depositar</button>
        <div className="white-text">{counter}</div>
        
        <button onClick={()=> {
          dispatch(retirar(100))
        }}> Retirar</button>
      </Container>

    );
}

export default Bank;