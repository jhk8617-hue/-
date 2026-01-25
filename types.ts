
import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SchoolStrategy {
  schoolName: string;
  description: string;
  points: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SYSTEM = 'system',
  STRATEGY = 'strategy',
  CONTACT = 'contact',
}

export type ViewType = 'home' | 'system-detail' | 'contact-detail' | 'apply-detail';
