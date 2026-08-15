import React, {useState} from 'react';

function ContactForm(){
    const [ime, setIme] = useState('');
    const [email, setEmail] = useState('');
    const [poruka, setPoruka] = useState('');
    const [obavijest, setObavijest] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!ime || !email || !poruka){
            setEmail('Morate popuniti sva polja!');
            return
        }
        const novaPoruka = {
            ime,
            email,
            poruka,
            datum: new Date().toLocaleString()
        };

        try{
            const res = await fetch('http://localhost:5000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novaPoruka)
            });
            if(res.ok){
                console.log('Kontakt forma: ',{ime,email,poruka})
                setObavijest('Poruka uspješno poslana!');
                setIme('');
                setEmail('');
                setPoruka('');
            }else{
                setObavijest('Desila se pogreška prilikom slanja!');
            }
        }catch(error){
            console.log('Server nije dostupan!');
        }

    };
    return (
        <form onSubmit={handleSubmit} style={{maxWidth:'500px',margin:'0 auto'}}>
            <h2>Pošaljite nam poruku</h2>
            <label>Ime i prezime</label>
            <input type='text'
                   value={ime}
                   onChange={(e) => setIme(e.target.value)}
                   required
            />
            <label>Email</label>
            <input type='email'
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
            />
            <label>Poruka</label>
            <textarea value={poruka}
                      onChange={(e) => setPoruka(e.target.value)}
                      required rows='4'
            />
            <button type="submit">Pošalji</button>
            {obavijest && <p style={{color:'green'}}>{obavijest}</p>}
        </form>
    )
}

export default ContactForm;