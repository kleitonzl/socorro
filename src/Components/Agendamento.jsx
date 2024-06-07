import React, { useState } from 'react';
import {
    Horario,
    TituloAgendamento,
    Titulomotivo,
    Inputmotivo,
    Inputdata,
    Motivo,
    SelectDay,
    Div1,
    Div1text,
    Div2,
    DivCalendario,
    Container,
    Button,
    ButtonConfirmar,
    Parhorario,
    ModalContent,
    ModalContainer,
    CloseButton
} from '../Styles/Agendamento.js';
import Img from '../../images/imgAgend.jpg';

const Sobre = ({ paragraph }) => {
    const [selectedTime, setSelectedTime] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTimeClick = (time) => {
        setSelectedTime(time);
        console.log(`Horário selecionado: ${time}`);
    };

    const handleConfirmClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const getButtonStyle = (time) => {
        return selectedTime === time ? { backgroundColor: 'lightblue' } : {};
    };

    return (
        <Container>
            <Div1>
                <Div1text>{paragraph}</Div1text>
                <img src={Img} alt="Agendamento" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
            </Div1>
            <Div2>
                <SelectDay>
                    <TituloAgendamento>Preencha</TituloAgendamento>
                    <hr />
                    <Parhorario>Selecione o dia</Parhorario>
                    <DivCalendario>
                        <Inputdata type="date" placeholder="Selecione a data desejada para o agendamento.." />
                    </DivCalendario>
                    <hr />
                </SelectDay>
                
                <Horario>
                    <Parhorario>Horários</Parhorario>
                    <div style={{ display: 'flex' }}>
                        <Button style={getButtonStyle('08:00')} onClick={() => handleTimeClick('08:00')}>08:00</Button>
                        <Button style={getButtonStyle('09:00')} onClick={() => handleTimeClick('09:00')}>09:00</Button>
                        <Button style={getButtonStyle('10:00')} onClick={() => handleTimeClick('10:00')}>10:00</Button>
                        <Button style={getButtonStyle('11:00')} onClick={() => handleTimeClick('11:00')}>11:00</Button>
                    </div>
                    <hr />
                </Horario>
                <Motivo>
                    <Titulomotivo>Motivo</Titulomotivo>
                    <Inputmotivo type="text" placeholder="Digite seus motivos para o agendamento..." />
                    <ButtonConfirmar onClick={handleConfirmClick}>Confirmar Agendamento</ButtonConfirmar>
                </Motivo>
            </Div2>

            {isModalOpen && (
                <ModalContainer>
                    <ModalContent>
                        <h2>Agendamento Concluído</h2>
                        <p>Seu agendamento foi concluído com sucesso!</p>
                        <CloseButton onClick={closeModal}>Fechar</CloseButton>
                    </ModalContent>
                </ModalContainer>
            )}
        </Container>
    );
}

export default Sobre;
