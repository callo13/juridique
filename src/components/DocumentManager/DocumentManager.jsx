import React, { useState } from 'react';
import { Upload, File, Trash2, AlertCircle } from 'lucide-react';

const DocumentManager = () => {
  const [documents, setDocuments] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    // TODO: Implémenter la logique d'upload
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Mes Documents Juridiques</h2>
      
      {/* Zone de dépôt */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors
          ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Glissez vos documents ici ou cliquez pour sélectionner
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Formats acceptés : PDF, DOCX, TXT
        </p>
      </div>

      {/* Liste des documents */}
      <div className="space-y-4">
        {documents.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Aucun document n'a été ajouté
          </div>
        ) : (
          documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
              <div className="flex items-center space-x-3">
                <File className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{doc.name}</p>
                  <p className="text-sm text-gray-500">{doc.size}</p>
                </div>
              </div>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Statistiques */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-medium text-gray-900 mb-3">Statistiques</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-semibold text-blue-600">{documents.length}</p>
            <p className="text-sm text-gray-500">Documents</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold text-green-600">0</p>
            <p className="text-sm text-gray-500">Vecteurs</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold text-purple-600">0 MB</p>
            <p className="text-sm text-gray-500">Stockage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentManager; 