import React from 'react';

class Form extends React.Component {

    constructor() {
        super();

        this.state ={
            name: '',
            email: '',
            cpf: '',
            address: '',
            city: '',
            state: '',
            residencia: false,
        };

        this.handleChange = this.handleChange.bind(this);



    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    render() {
        const { name, email, cpf, address, city, state, residencia } = this.state;
        return (
            <form>
                <fieldset>
                    <label htmlFor="name">
                        Name:
                        <input value={name} onChange={this.handleChange} type="text" name="name" id="name" maxLength="40" />
                    </label>

                    <label htmlFor="email">
                        Email:
                        <input type="email" name="email" id="email" maxLength="50" />
                    </label>

                    <label htmlFor="cpf">
                        CPF:
                        <input type="text" name="cpf" id="cpf" maxLength="11" />
                    </label>

                    <label htmlFor='adress'>
                        Adress:
                        <textarea name='adress' id='adress' maxLength='200'>
                        </textarea>
                    </label>

                    <label htmlFor="city">
                        City:
                        <input type="text" name="city" id="city" maxLength="28" />
                    </label>

                    <label htmlFor='state'>
                        <select name='state' id='state'>
                            <option value="SP">SP</option>
                            <option value="RJ">RJ</option>
                            <option value="MG">MG</option>
                            <option value="AM">AM</option>
                        </select>
                    </label>

                    <label>
                        Residência:
                        <label htmlFor="casa">
                            <input type="radio" name="residencia" value="casa" id="casa" />
                            Casa
                        </label>
                        <label htmlFor="apartamento">
                            <input type="radio" name="residencia" value="apartamento" id="apartamento"/>
                            Apartamento
                        </label>

                    </label>
                </fieldset>
            </form>
        );
    }

}

export default Form;

