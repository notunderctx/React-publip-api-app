import { useEffect, useState } from 'react';
import './main.css';

function Apis() {
  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
  
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.entries);
      });
  }, []);

 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

 
  const filteredData = apiData.filter((api) =>
    api.API.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        {    }
        <input
          type="text"
          placeholder="Search APIs"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            margin: '0 auto', 
            width: '90%', 
            padding: '10px', 
          }}
        />
         <i className="fas fa-search search-icon"></i>
      </div>
      <div className="apis" id="trt">
        {filteredData.map((api, index) => (
          <div className="card" key={index}>
            <div className="name"><h1>{api.API}</h1></div>
            <code className="link"><a href={api.Link}>{api.Link}</a></code>
            <p className="auth">Auth: {api.Auth}</p>
            <p className="description">{api.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apis;
