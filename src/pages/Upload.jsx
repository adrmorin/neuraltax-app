import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Upload = () => {
    const [files, setFiles] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isProcessed, setIsProcessed] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        handleFiles(e.dataTransfer.files);
    };

    const handleFileInput = (e) => {
        handleFiles(e.target.files);
    };

    const handleFiles = (newFiles) => {
        if (newFiles.length > 0) {
            const fileArray = Array.from(newFiles).map(file => ({
                name: file.name,
                size: (file.size / 1024 / 1024).toFixed(2),
                ext: file.name.split('.').pop().toUpperCase(),
                status: 'Pending'
            }));
            setFiles(prev => [...prev, ...fileArray]);
        }
    };

    const processDocuments = () => {
        setIsProcessing(true);

        // Update status to Uploading
        setFiles(prev => prev.map(f => ({ ...f, status: 'Uploading...' })));

        setTimeout(() => {
            setFiles(prev => prev.map(f => ({ ...f, status: 'Processed' })));
            setIsProcessing(false);
            setIsProcessed(true);
            alert('Success! AI has extracted data from ' + files.length + ' documents.');
        }, 2000);
    };

    const getStatusClass = (status) => {
        if (status === 'Pending') return 'status-badge status-pending';
        if (status === 'Uploading...') return 'status-badge status-uploading';
        if (status === 'Processed') return 'status-badge status-success';
        return 'status-badge';
    };

    return (
        <div className="upload-container" style={{ maxWidth: '900px', margin: '4rem auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ marginBottom: '1rem' }}>Secure Document Vault</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Upload your tax documents here. Our AI will automatically extract the data.</p>
                <div className="security-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 0, 0, 0.05)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    🔒 256-bit End-to-End Encryption
                </div>
            </div>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileInput}
                multiple
                hidden
            />

            <div
                className={`upload-area ${isDragOver ? 'dragover' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
                style={{
                    border: '2px dashed var(--accent-mint)',
                    background: isDragOver ? 'rgba(157, 211, 175, 0.1)' : 'rgba(157, 211, 175, 0.05)',
                    borderRadius: 'var(--border-radius)',
                    padding: '4rem 2rem',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    marginBottom: '2rem',
                    borderColor: isDragOver ? 'var(--accent-green-bright)' : 'var(--accent-mint)'
                }}
            >
                <div className="upload-icon" style={{ fontSize: '4rem', color: 'var(--accent-mint)', marginBottom: '1rem' }}>☁️</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Drag & Drop your files here</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Supports PDF, JPG, PNG (Max 25MB)</p>
                <button
                    className="btn btn-primary"
                    onClick={(e) => { e.stopPropagation(); fileInputRef.current.click(); }}
                >
                    Browse Files
                </button>
            </div>

            <h3 style={{ marginBottom: '1rem' }}>Uploaded Documents</h3>
            <div className="doc-list" style={{ background: 'white', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0, 0, 0, 0.05)', overflow: 'hidden', marginBottom: '2rem' }}>
                {files.length === 0 ? (
                    <div className="doc-item" style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'center', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                        No documents uploaded yet.
                    </div>
                ) : (
                    files.map((file, index) => (
                        <div key={index} className="doc-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
                            <div className="doc-info" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="doc-icon" style={{ width: '40px', height: '40px', background: 'var(--bg-light-green)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-sage)', fontWeight: 600 }}>
                                    {file.ext}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>{file.name}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{file.size} MB • Ready to process</div>
                                </div>
                            </div>
                            <div className={getStatusClass(file.status)} style={{ padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600, background: file.status === 'Pending' ? '#fef9c3' : file.status === 'Processed' ? '#dcfce7' : '#e0f2fe', color: file.status === 'Pending' ? '#854d0e' : file.status === 'Processed' ? '#166534' : '#0369a1' }}>
                                {file.status}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <button
                    className="btn"
                    style={{ background: isProcessed ? 'var(--accent-green-bright)' : 'var(--bg-dark-deep)', color: isProcessed ? 'var(--bg-dark-deep)' : 'white' }}
                    onClick={processDocuments}
                    disabled={files.length === 0 || isProcessing || isProcessed}
                >
                    {isProcessing ? 'Processing...' : isProcessed ? 'Processing Complete' : 'Process Documents with AI'}
                </button>
                <Link to="/wizard" className="btn btn-primary">Continue to Wizard →</Link>
            </div>
        </div>
    );
};

export default Upload;
