
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import HomePage from '../components/Pages/HomePage';

const Index = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default Index;
