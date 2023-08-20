import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ListaTareas = () => {
    const [tareas, setTareas] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [completada, setCompletada] = useState(false);

    const handleAddTodo = () => {
        if (inputValue) {
            setTareas([...tareas, { text: inputValue, completada }]);
            setInputValue('');
            setCompletada(false);
        }
    }

    const handleToggleTarea = (index) => {
        setTareas(tareas.map((tarea, i) => {
            if (i === index) {
                return { ...tarea, completada: !tarea.completada };
            }
            return tarea;
        }));
    }

    const handleEliminarTarea = (index) => {
        setTareas(tareas.filter((_, i) => i !== index));
    }

    return (
        <div className="container mb-3">
            <div className="input-group mb-2">
                <input
                    type="text"
                    className="form-control me-3"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id='completada'
                        checked={completada}
                        onChange={(e) => setCompletada(e.target.checked)}
                    />
                    <label htmlFor='completada' className="form-check-label">Completada</label>
                </div>
                <button className="btn btn-primary" onClick={handleAddTodo}>Agregar tarea</button>
            </div>
            <ul className="list-group">
                {tareas.map((tarea, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                        <span style={{ textDecoration: tarea.completada ? 'none' : 'line-through' }}>
                            {tarea.text}
                        </span>
                        <div>
                            <button
                                className={`btn ${tarea.completada ? 'btn-success' : 'btn-warning'} me-2`}
                                onClick={() => handleToggleTarea(index)}
                            >
                                {tarea.completada ? 'Completada' : 'No completada'}
                            </button>
                            <button className="btn btn-danger" onClick={() => handleEliminarTarea(index)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaTareas;



