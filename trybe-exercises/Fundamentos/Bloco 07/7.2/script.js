const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  let personDelivery = order.order.delivery.deliveryPerson;
  let name = order.name;
  let telefone = order.phoneNumber;
  let endereço = `R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`

  console.log(`Olá ${personDelivery}, entrega para: ${name}, Telefone: ${telefone}, ${endereço}`);

}

customerInfo(order);

const orderModifier = (order) => {
  order.order.pizza = { muzzarela: {
    amount: 1,
    price: 20,
  },
  calabresa: {
    amount:1,
    price: 20,
  }
  }

  order.order.delivery.deliveryPerson = 'Luiz Silva'
  order.payment.total = 50;
  console.log(`Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de muzzarela, calabresa e Coca-Cola Zero é R$${order.payment.total},00.`);

}

orderModifier(order);

// Parte 2:

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function adicionaChave (objeto, chave, horario) {
  objeto[chave] = horario;
  console.log(objeto)
}

adicionaChave(lesson2, 'turno', 'manhã');

function keysObject (objeto) {
  let keys = Object.keys(objeto)
  console.log(keys)
}

keysObject(lesson1)

function lengthObject (objeto) {
  let lengthObj = Object.keys(objeto).length
  console.log(lengthObj);
}

lengthObject(lesson2);

function valuesObject (objeto) {
  let valuesObj = Object.values(objeto)
  console.log(valuesObj)
}

valuesObject(lesson3);

let allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
console.log(allLessons)

function totalOfStudents (objeto) {
  let studentsLesson1 = objeto.lesson1.numeroEstudantes;
  let studentsLesson2 = objeto.lesson2.numeroEstudantes;
  let studentsLesson3 = objeto.lesson3.numeroEstudantes;
  let total = studentsLesson1 + studentsLesson2 + studentsLesson3;
  console.log(total)
}

totalOfStudents(allLessons);

function valueKey (objeto, position) {
  let valuePosition = Object.values(objeto)[position]
  console.log(valuePosition)
}

valueKey(lesson1, 0)

function verifyEntries (objeto, key, value) {
  let entriesToVerify = Object.entries(objeto);
  let trueFalse = false;
  for (index in entriesToVerify) {
    if(entriesToVerify[index][0] === key && entriesToVerify[index][1] === value)
    trueFalse = true;
  }
  console.log(trueFalse)
}

verifyEntries(lesson1, 'materia', 'Matemática')