import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './ResourceManagement.css';

Modal.setAppElement('#root');

const ResourceManagement = () => {
  const [books, setBooks] = useState([]);
  const [courses, setCourses] = useState([]);
  const [banners, setBanners] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentResource, setCurrentResource] = useState(null);
  const [formData, setFormData] = useState({ title: '', image: '', apply: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const booksResponse = await axios.get('http://localhost:5001/api/books');
        setBooks(booksResponse.data);

        const coursesResponse = await axios.get('http://localhost:5001/api/courses');
        setCourses(coursesResponse.data);

        const bannersResponse = await axios.get('http://localhost:5001/api/sliderData');
        setBanners(bannersResponse.data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, []);

  const handleDelete = async (type, id) => {
    console.log('Deleting resource with ID:', id); // Log the ID
    try {
      await axios.delete(`http://localhost:5001/api/${type}/${id}`);
      switch (type) {
        case 'books':
          setBooks(books.filter(book => book._id !== id));
          break;
        case 'courses':
          setCourses(courses.filter(course => course._id !== id));
          break;
        case 'sliderData':
          setBanners(banners.filter(banner => banner._id !== id));
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
    }
  };
  


  const handleEdit = (type, resource) => {
    setCurrentResource({ type, ...resource });
    setFormData({ title: resource.title, image: resource.image, apply: resource.apply });
    setModalIsOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { type, _id } = currentResource;
    try {
      await axios.put(`http://localhost:5001/api/${type}/${_id}`, formData);
      setModalIsOpen(false);
      const updatedResource = await axios.get(`http://localhost:5001/api/${type}`);
      switch (type) {
        case 'books':
          setBooks(updatedResource.data);
          break;
        case 'courses':
          setCourses(updatedResource.data);
          break;
        case 'sliderData':
          setBanners(updatedResource.data);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(`Error updating ${type}:`, error);
    } 
  };

  return (
    <div className="resource-management">
      <h2>Resource Management</h2>
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <div className="resource-section">
        <h3>Books</h3>
        {books.map(book => (
          <div key={book._id} className="resource-item">
            <img src={book.image} alt={book.title} />
            <h4>{book.title}</h4>
            <p>Apply: {book.apply}</p>
            <button onClick={() => handleEdit('books', book)}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete('books', book._id)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="resource-section">
        <h3>Courses</h3>
        {courses.map(course => (
          <div key={course._id} className="resource-item">
            <img src={course.image} alt={course.title} />
            <h4>{course.title}</h4>
            <p>Apply: {course.apply}</p>
            <button onClick={() => handleEdit('courses', course)}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete('courses', course._id)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="resource-section">
        <h3>Banners</h3>
        {banners.map(banner => (
          <div key={banner._id} className="resource-item">
            <img src={banner.image} alt={`Banner ${banner._id}`} />
            <button onClick={() => handleEdit('sliderData', banner)}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete('sliderData', banner._id)}>Delete</button>
          </div>
        ))}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="modal" overlayClassName="modal-overlay">
        <h2>Edit Resource</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
          </label>
          <label>
            Image URL:
            <input type="text" name="image" value={formData.image} onChange={handleChange} />
          </label>
          <label>
            Apply Link:
            <input type="text" name="apply" value={formData.apply} onChange={handleChange} />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setModalIsOpen(false)}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default ResourceManagement;
