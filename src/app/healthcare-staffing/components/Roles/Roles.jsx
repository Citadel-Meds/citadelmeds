import React from 'react'
import { roleData } from './roleData'
import './roles.css'

const RoleCard = ({ image, title, description }) => {
  return (
    <div className="role-card">
      <div
        className="role-card__bg"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="role-card__overlay" aria-hidden="true" />
      <div className="role-card__text">
        <h3 className="role-card__title">{title}</h3>
        <p className="role-card__description">{description}</p>
      </div>
    </div>
  );
}

const Roles = () => {
  return (
    <section className="roles section-padding">
      <h1>Roles We Supply</h1>
      <div className="roles-grid">
        {roleData.map((role) => (
          <RoleCard
            key={role.id}
            image={role.image}
            title={role.title}
            description={role.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Roles
