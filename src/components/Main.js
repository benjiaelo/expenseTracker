import React from "react";
import { connect } from "react-redux";
import { AddNewTransaction } from "../redux/Action";
import Balance from "./Balance";
import AddTransaction from "./AddTransaction";
import { v4 as uuidv4 } from "uuid";
import AllTransactions from "./AllTransactions";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Main = (props) => {
  const transactions = props.transactions;
  const AddNewTransaction = props.AddNewTransaction;

  return (
    <div className="main container">


<Container>
      <Row>
        <Col md={3}> <Balance transactions={transactions} /></Col>
        <Col md={3}> <AllTransactions transactions={transactions} /></Col>
        <Col md={3}> <AddTransaction AddNewTransaction={AddNewTransaction} id={uuidv4()} /></Col>
      </Row>
  
    </Container>

    </div>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  AddNewTransaction: (newTransaction) =>
    dispatch(AddNewTransaction(newTransaction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
