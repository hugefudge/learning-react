import React from 'react'
import './App.css'

import First from './components/basics/First'
import WithProps from './components/basics/WithProps'
import Randomer from './components/basics/Randomer'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import StudentList from './components/repeticao/StudentList'
import TableProducts from './components/repeticao/TableProducts'
import OddOrEven from './components/conditionals/OddOrEven'
import UserInfo from './components/conditionals/UserInfo'
import DirectFather from './components/communication/DirectFather'
import IndirectFather from './components/communication/IndirectFather'
import Counter from './components/counter/Counter'
import Input from './components/form/Input'
import Card from './components/layout/Card'

export default () => (
  <>
    <h1>Fundamentos REACT</h1>
    <div className="cards">
    <Card title="01 - First Component" color="blue">
      <First />
    </Card>

    <Card title="02 - Randomizador" color="blue">
      <Randomer min="1" max="60" />
    </Card>

    <Card title="03 - Student situation" color="blue">
      <WithProps title="Situacao do aluno" aluno="Aang" nota="9.6" />
    </Card>

    <Card title="04 - Components with children" color="blue">
      <Family surname="Gaang" >
        <FamilyMember name="Toph"  />
        <FamilyMember name="Katara" />
        <FamilyMember name="Sokka" />
      </Family>
    </Card>
    <Card title="05 - Introduction to repetitions">
      <StudentList />
    </Card>
    <Card title="06 - Repetition exercise">
      <TableProducts />
    </Card>
    <Card title="07 - Conditional render" color="green">
      <OddOrEven />
      <UserInfo user={{name: "Zuko"}} />
      <UserInfo user={{email: "zuko@gaang"}} />
    </Card>
    <Card title="08 - Direct Communication" color="brown">
      <DirectFather />
    </Card>
    <Card title="09 - Indirect Communication" color="brown">
      <IndirectFather />
    </Card>
    <Card title="10 - Controlled Component (Input)" color="black">
      <Input />
    </Card>
    <Card title="11 - Counter Class" color="purple">
      <Counter initialNumber={10}/>
    </Card>
    </div>
  </>
)
