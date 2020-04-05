import React, {useState} from 'react'
import Icon from './components/Icon'

// This is toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Our Boostrap
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Card, CardBody, Container, Row ,Col} from 'reactstrap'
import './App.css';
const itemArray = new Array(9).fill('empty');

const App = () => {

    const [isCross, setIsCross] = useState(false);
    const [winMessage, setWinMessage] = useState('');

    // realod the game
    const reloadGame = () => {
        setIsCross(false);
        setWinMessage("")
        itemArray.fill('empty',0 ,9);
    }
    // realod the game
    const checkIsWinner = () => {
        if (
            itemArray[0] !== 'empty' &&
            itemArray[0] === itemArray[1] &&
            itemArray[1] === itemArray[2]
        ) {
            setWinMessage(`${itemArray[0]} wins`);
        } else if(
            itemArray[3] !== 'empty' &&
            itemArray[3] === itemArray[4] &&
            itemArray[4] === itemArray[5]
        ){
            setWinMessage(`${itemArray[3]} wins`);
        } else if(
            itemArray[6] !== 'empty' &&
            itemArray[6] === itemArray[7] &&
            itemArray[7] === itemArray[8]
        ){
            setWinMessage(`${itemArray[6]} wins`);
        } else if(
            itemArray[0] !== 'empty' &&
            itemArray[0] === itemArray[3] &&
            itemArray[3] === itemArray[6]
        ){
            setWinMessage(`${itemArray[0]} wins`);
        } else if(
            itemArray[1] !== 'empty' &&
            itemArray[1] === itemArray[4] &&
            itemArray[4] === itemArray[7]
        ){
            setWinMessage(`${itemArray[1]} wins`);
        } else if(
            itemArray[2] !== 'empty' &&
            itemArray[2] === itemArray[5] &&
            itemArray[5] === itemArray[8]
        ){
            setWinMessage(`${itemArray[2]} wins`);
        } else if(
            itemArray[0] !== 'empty' &&
            itemArray[0] === itemArray[4] &&
            itemArray[4] === itemArray[8]
        ){
            setWinMessage(`${itemArray[0]} wins`);
        } else if(
            itemArray[2] !== 'empty' &&
            itemArray[2] === itemArray[4] &&
            itemArray[4] === itemArray[6]
        ){
            setWinMessage(`${itemArray[2]} wins`);
        }
    }
    // realod the game
    const changeItem = (itemNumber) => {
        if(winMessage){
            return toast(winMessage, {type: 'success'});
        }

        if(itemArray[itemNumber] === 'empty'){
            itemArray[itemNumber] = isCross ? "cross" : "circle";
            setIsCross(!isCross);
        } else {
            return toast('Already filled refresh to reset game',{type: 'error'});
        }
        checkIsWinner();
    }

    return (
        <Container className="p-5">
            <ToastContainer position="bottom-center"/>
            <h1 className='display-4 text-center text-white mb-3'>Tic Tac Toe Game</h1>
            <Row>
                <Col md={6} className="offset-md-3">
                    {
                        winMessage ? (
                            <div className="my-2">
                                <h1 className="text-win text-uppercase text-center mb-3">
                                    {winMessage}
                                </h1>
                                <Button
                                    color='success'
                                    block
                                    onClick={reloadGame}
                                    className="my-4"
                                >
                                    Reset Game
                                </Button>
                            </div>
                        ) : (
                            <h1 className="text-center text-warning mb-3">
                                {isCross ? "Cross" : "Circle"} turns
                            </h1>
                        )
                    }
                    <div className="grid">
                        {itemArray.map((item, index) => (
                            <Card onClick={() => changeItem(index)}>
                                <CardBody className="box">
                                    <Icon name={item}/>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default App;