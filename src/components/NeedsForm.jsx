import  { useContext, useState } from 'react';
import { NeedsContext } from '../context/NeedsContext';
import { Button, Form, Label, Input } from "reactstrap";
import { useNavigate } from 'react-router-dom';

const NeedsForm = () => {
  const { addNeed } = useContext(NeedsContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    entidad: '',
    nit_entidad: '',
    ciudad_entidad: '',
    qualityStandard: '',
    fecha_de_ultima_publicaci: '',
    descripci_n_del_procedimiento: '',
    precio_base: '',
    modalidad_de_contratacion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNeed(formData);
    setFormData({
      entidad: '',
      nit_entidad: '',
      ciudad_entidad: '',
      qualityStandard: '',
      fecha_de_ultima_publicaci: '',
      descripci_n_del_procedimiento: '',
      precio_base: '',
      modalidad_de_contratacion: '',
    });
    navigate('/listado-necesidades');
  };

  return (
    <Form onSubmit={handleSubmit} className='formulario'>
      <div>
        <Label>Nombre Empresa</Label>
          <Input
            type="text"
            name="entidad"
            value={formData.entidad}
            onChange={handleChange}
            required
          />
      </div>
      {' '}
      <div>
      <Label>NIT</Label>
          <Input
            type="number"
            name="nit_entidad"
            value={formData.nit_entidad}
            onChange={handleChange}
            required
          />
      </div>
      <div>
        <label>Ciudad</label>
        <Input
          type="text"
          name="ciudad_entidad"
          value={formData.ciudad_entidad}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Estándares de Calidad</label>
        <Input
          type="text"
          name="qualityStandard"
          value={formData.qualityStandard}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Fecha</label>
        <Input
          type="date"
          name="fecha_de_ultima_publicaci"
          value={formData.fecha_de_ultima_publicaci}
          onChange={handleChange}
        />
      </div>
      {' '}
        <label>Descripción...</label>
        <textarea
          className='descripcion'
          cols={100}
          rows={5}
          name="descripci_n_del_procedimiento"
          value={formData.descripci_n_del_procedimiento}
          onChange={handleChange}
          required
          />
      {' '}
      <Label>Presupuesto en pesos $</Label>
        <Input
          type="number"
          name="precio_base"
          value={formData.precio_base}
          onChange={handleChange}
          required
          />
      {' '}
      <Label>Urgencia, a que tiempo necesita el producto o servicio</Label>
        <Input
          type="text"
          name="modalidad_de_contratacion"
          value={formData.modalidad_de_contratacion}
          onChange={handleChange}
          required
          />
      {' '}
      <Button color="primary" outline type="submit" className='btn-publicar'>
        Publicar
      </Button>
    </Form>

    
  );
};

export default NeedsForm;

