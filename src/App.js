import { useState } from 'react';

import CustomerList from './CustomerList';

​

function App() {

  const [customerList, setCustomerList] = useState(CustomerList);

​

  const [customer, setCustomer] = useState({

    name: '',

    address: '',

    phone: ''

  });

​

  const handleName = (e) => {

    // console.log(e.target.value);

    setCustomer((prevState) => {

      return ({ ...prevState, name: e.target.value });

    });

  };

​

  const handleAddress = (e) => {

    //    console.log(e.target.value);

    setCustomer((prevState) => {

      return ({ ...prevState, address: e.target.value });

    });

  };

​

  const handlePhone = (e) => {

    //    console.log(e.target.value);

    setCustomer((prevState) => {

      return ({ ...prevState, phone: e.target.value });

​

    });

  };

​

  const handleCommit = (e) => {

    console.log(customer.name);

    console.log(customer.address);

    console.log(customer.phone);

​

    //추가

    setCustomerList((prevState) => {

      // return [...prevState, customer];

      //앞으로 입력값이 들어감

      return [customer, ...prevState];

    });

​

    //input 초기화

    setCustomer(() => {

      return { name: '', address: '', phone: '' };

    });

  };

​

  return (

    <>

      <p>

        <span> 이름</span>

        <input type="text" onChange={handleName} value={customer.name}></input>

      </p>

      <p>

        <span>주소</span>

        <input type="text" onChange={handleAddress} value={customer.address}></input>

      </p>

      <p>

        <span>전화</span>

        <input type="text" onChange={handlePhone} value={customer.phone}></input>

      </p>

​

      <button onClick={handleCommit}>click</button>

​

      <table>

        <thead>

          <tr>

            <th>이름</th>

            <th>주소</th>

            <th>전화</th>

          </tr>

        </thead>

​

        <tbody>

          {

             customerList.map((customer, idx) => 

                <tr key={idx}>

                  <td>{customer.name}</td>

                  <td>{customer.address}</td>

                  <td>{customer.phone}</td>

                </tr>

             )

          }

​

        </tbody>

      </table>

    </>

  );

}

​

export default App;
