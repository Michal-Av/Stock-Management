import React from 'react';

interface TextLabelProps {
  label: string;
  value: string | number;
}

const TextLabel: React.FC<TextLabelProps> = ({ label, value }) => (
  <p><strong>{label}:</strong> {value}</p>
);

export default TextLabel;