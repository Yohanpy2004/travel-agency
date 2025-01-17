// app/components/DashboardStats.js
import React from 'react';
import { useMenu } from '../context/MenuContext';
import './DashboardStats.css';
import AnalyticsPage from '../pages/dashboard/super-admin/analytics/page';
import Users from '../pages/dashboard/super-admin/users/page';
import Dashboard from '../pages/dashboard/super-admin/dashboard/page';

const DashboardStats = () => {
  const { selectedMenu } = useMenu();

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Tableau de Bord':
        return (
          <div>
            <h2>Dashboard</h2>
            <p>Contenu dynamique pour la page dashboard.</p>
            <Dashboard />
          </div>
        );
      case 'Analyse':
        return (
          <div>
            <h2>Analyse</h2>
            <p>Contenu dynamique pour la page d'analyse.</p>
            <AnalyticsPage />
          </div>
        );
      case 'Utilisateurs':
        return (
          <div>
            <h2>Utilisateurs</h2>
            <p>Gestion des utilisateurs.</p>
            <Users />
          </div>
        );
      case 'Rôles et Permissions':
        return <div><h2>Rôles et Permissions</h2><p>Gestion des rôles et permissions.</p></div>;
      case 'Feedbacks':
        return <div><h2>Feedbacks</h2><p>Gestion des feedbacks.</p></div>;
      case 'Réservations':
        return <div><h2>Réservations</h2><p>Gestion des réservations.</p></div>;
      case 'Annulations':
        return <div><h2>Annulations</h2><p>Gestion des annulations.</p></div>;
      case 'Rapports':
        return <div><h2>Rapports</h2><p>Génération des rapports.</p></div>;
      case 'Documentation':
        return <div><h2>Documentation</h2><p>Accès à la documentation.</p></div>;
      case 'Paramètres':
        return <div><h2>Paramètres</h2><p>Gestion des paramètres système.</p></div>;
      case 'Notifications':
        return <div><h2>Notifications</h2><p>Gestion des notifications.</p></div>;
      case 'Support':
        return <div><h2>Support</h2><p>Accès au support.</p></div>;
      default:
        return selectedMenu ? null : (
          <p>Bienvenue sur cette plateforme conviviale. Nous sommes heureux de pouvoir être avec vous pour booster votre productivité et vous permettre de prendre les meilleures décisions en temps opportun.</p>
        );
    }
  };

  return (
    <div className="dashboard-stats">
      {renderContent()}
    </div>
  );
};

export default DashboardStats;
