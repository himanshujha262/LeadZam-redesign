import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  name: string;
  email: string;
  company: string;
  avatar?: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  demoLogin: () => void;
  signup: (name: string, email: string, company: string, pass: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('leadzam_user');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && (parsed.email || parsed.name)) {
          return parsed;
        }
      } catch {
        return null;
      }
    }
    return null;
  });

  const login = async (email: string): Promise<boolean> => {
    await new Promise((res) => setTimeout(res, 400));
    const newUser: User = {
      name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) || 'LeadZam User',
      email,
      company: 'Growth Technologies Inc.',
      role: 'Account Executive',
    };
    setUser(newUser);
    localStorage.setItem('leadzam_user', JSON.stringify(newUser));
    localStorage.setItem('leadzam_auth', 'true');
    return true;
  };

  const demoLogin = () => {
    const demoUser: User = {
      name: 'Himanshu Kumar',
      email: 'himanshu@leadzam.com',
      company: 'LeadZam Growth Agency',
      role: 'Sales Director',
    };
    setUser(demoUser);
    localStorage.setItem('leadzam_user', JSON.stringify(demoUser));
    localStorage.setItem('leadzam_auth', 'true');
  };

  const signup = async (name: string, email: string, company: string): Promise<boolean> => {
    await new Promise((res) => setTimeout(res, 500));
    const newUser: User = {
      name,
      email,
      company,
      role: 'Workspace Admin',
    };
    setUser(newUser);
    localStorage.setItem('leadzam_user', JSON.stringify(newUser));
    localStorage.setItem('leadzam_auth', 'true');
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('leadzam_user');
    localStorage.removeItem('leadzam_auth');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        demoLogin,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

