import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get('/api/subscribers');
        setSubscribers(response.data);
      } catch (error) {
        setError('Failed to fetch subscribers');
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='w3-container'>
        <style>
{`
table { width: 100%; border-collapse: collapse;}
th, td { border: 1px solid #ddd; padding: 8px; }
th { background-color: #f4f4f4; text-align: left;}
`}
        </style>
        <div className='card w3-padding-large'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subscribed At</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber._id}>
              <td>{subscriber.name}</td>
              <td>{subscriber.email}</td>
              <td>{new Date(subscriber.subscribedAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Dashboard;
