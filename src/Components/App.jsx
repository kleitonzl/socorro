import { BrowserRouter, Routes, Route } from 'react-router-dom'
// BrowserRouter deve ser o componente pai que envolve tudo que depende do React-Router
// Routes define a área em que vamos colocar os nossos Route.
// O Route recebe um caminho em Path, se esse caminho for o mesmo da URL ele irá renderizar o componente que estiver dentro de Element={}

import Feedbacks from './Feedbacks';
import Header from './Header';
import Home from './Home';
import Rodape from './Rodape';
import Agendamento from './Agendamento';


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/feedbacks' element={<Feedbacks />} />
                <Route path='/agendamento' element={<Agendamento paragraph={'Bem-vindo à página de agendamento de autorização escolar! Aqui, você pode solicitar permissões e autorizações para diversas atividades escolares de maneira rápida e fácil. Nosso sistema foi desenvolvido para facilitar a comunicação entre a gestão escolar e os estudantes, garantindo um processo mais eficiente e organizado.'} />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default App;