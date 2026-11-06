import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LeadProvider } from './context/LeadContext';
import { AppLayout } from './components/layout/AppLayout';
import { LandingPage } from './pages/LandingPage';
import { LeadsPage } from './pages/LeadsPage';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LeadProvider>
          <Routes>
            {/* Public Landing & Marketing Page */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/landing" element={<LandingPage />} />

            {/* Public Authentication Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* App Layout Protected Routes */}
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/leads" element={<LeadsPage />} />
              <Route path="/leads/:id" element={<LeadsPage />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </LeadProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
