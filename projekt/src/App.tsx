import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { SettingsForm } from './components/SettingsForm.jsx';
import { GenerateTimetable } from './components/GenerateTimetable.jsx';
import { HtmlContent } from './components/HtmlContent';

export function App() {
  return (
    <>
      <h1>main page</h1>
      <SettingsForm />
      <GenerateTimetable />

      <blockquote>
        <pre>{HtmlContent}</pre>
      </blockquote>

      <div dangerouslySetInnerHTML={{ __html: HtmlContent }}></div>
    </>
  );
}
