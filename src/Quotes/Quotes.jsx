import { Card, } from 'antd';
import React, { useState } from 'react';
import './Quotes.css';

const Quotes = () => {
    const [numCards, setNumCards] = useState(1);
    const [quoteList, setQuoteList] = useState([]);
    const [token, setToken] = useState(null);

    // Xử lý sự kiện khi người dùng thay đổi số lượng card cần tạo
    const handleInputChange = (event) => {
        const num = parseInt(event.target.value);
        setNumCards(num);
    };

    // Xử lý sự kiện khi người dùng nhấn nút "Generate Quotes"
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            // Gửi yêu cầu POST đến endpoint "/authenticate" để lấy token
            const authResponse = await fetch('http://localhost:3000/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: 'hoang', password: '123' }),
            });
            const authData = await authResponse.json();
            const { token } = authData;
            setToken(token);

            // Gửi yêu cầu POST đến endpoint "/quotes" để lấy danh sách quotes
            const quoteResponse = await fetch('http://localhost:3000/quotes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify({ num: numCards }),
            });
            const quoteData = await quoteResponse.json();
            setQuoteList(quoteData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleFormSubmit} style={{ marginBottom: '20px' }}>
                    <input
                        style={{
                            paddingLeft: '10px',
                            marginRight: '10px',
                            height: '30px',
                            fontSize: '16px',
                            borderRadius: '10px',
                        }}
                        type="number"
                        value={numCards}
                        onChange={handleInputChange}
                    />
                    <button className='btn-Quotes' type="submit">Generate Quotes</button>
                </form>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 25%)' }}>
                {/* Hiển thị danh sách cards nếu đã có */}
                {quoteList.length > 0 && (
                    quoteList.map((quote, index) => (
                        <div style={{ display: 'inline-block', margin: 10 }} key={index}>
                            <Card title={quote.author}>
                                <p>{quote.quote}</p>
                            </Card>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Quotes;