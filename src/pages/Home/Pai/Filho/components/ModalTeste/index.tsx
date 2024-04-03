import { FormEvent, useEffect, useState } from 'react';
import * as S from './styles';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';



export function ModalTeste() {

    const [input, setInput] = useSearchParams();
    const [valorInput, setValorInput] = useState({ user: '', seila: '' });
    const [isOpen, setIsOpen] = useState(Boolean);

    const navigate = useNavigate();


    useEffect(() => {
        setIsOpen(true);
        setValorInput({ seila: input.get('seila') || '', user: input.get('user') || '' });
    }, []);

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault();
        alert('testando');
        setInput({ seila: valorInput.seila, user: valorInput.user });
        console.log(input.getAll);
    }


    console.log({ valorInput });
    return (

        isOpen && <><S.Container>
            <form onSubmit={onSubmit}>
                {
                    valorInput.user ? <h1>{`ola ${valorInput.user}`}</h1> : <h1>Coloque seu nome</h1>
                }
                <input value={valorInput.user} onChange={(event) => setValorInput({ ...valorInput, user: event.target.value })} />
                <h1>modalTeste</h1>
                <input value={valorInput.seila} onChange={(event) => setValorInput({ ...valorInput, seila: event.target.value })} />
                <button>Salvar</button>
            </form>
            <S.CloseButton>
                <IoCloseOutline onClick={() => {
                    setIsOpen(false); navigate('/avo/pai/filho');
                }} size={20} />
            </S.CloseButton>

        </S.Container></>




    );
}