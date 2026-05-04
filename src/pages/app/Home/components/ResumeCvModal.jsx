import { Modal, Segmented } from 'antd'
import { useMemo, useState } from 'react'

const publicBase = process.env.PUBLIC_URL || ''

const RESUME_PDF = `${publicBase}/pdf/Shaiharyaar-Ahmad-Resume.pdf`
const CV_PDF = `${publicBase}/pdf/Shaiharyaar-Ahmad-CV.pdf`

/** Chromium-style PDF viewer: hide toolbars / side panes (browser-dependent). */
function pdfChromelessUrl(path) {
  const base = path.split('#')[0]
  return `${base}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`
}

const ResumeCvModal = ({ open, onClose }) => {
  const [doc, setDoc] = useState('resume')

  const iframeSrc = useMemo(() => {
    const path = doc === 'resume' ? RESUME_PDF : CV_PDF
    return pdfChromelessUrl(path)
  }, [doc])

  return (
    <Modal
      title={
        <div className='resume-cv-modal__title'>
          <span className='resume-cv-modal__title-text'>Resume & CV</span>
          <span className='resume-cv-modal__title-hint'>Inline preview</span>
        </div>
      }
      open={open}
      onCancel={onClose}
      afterOpenChange={(visible) => {
        if (!visible) setDoc('resume')
      }}
      footer={null}
      width='min(1040px, 98vw)'
      destroyOnClose
      centered
      zIndex={110000}
      className='resume-cv-modal'
      wrapClassName='resume-cv-modal-wrap'
      styles={{ body: { padding: 0 }, header: { marginBottom: 0 } }}
    >
      <div className='resume-cv-modal__shell'>
        <div className='resume-cv-modal__controls'>
          <Segmented
            className='resume-cv-modal__segmented'
            size='large'
            value={doc}
            onChange={setDoc}
            options={[
              { label: 'Resume', value: 'resume' },
              { label: 'Curriculum vitae', value: 'cv' },
            ]}
          />
        </div>
        <div className='resume-cv-modal__viewport'>
          <iframe
            key={`${doc}-${open}`}
            title={doc === 'resume' ? 'Resume PDF' : 'CV PDF'}
            src={iframeSrc}
            className='resume-cv-modal__frame'
          />
        </div>
      </div>
    </Modal>
  )
}

export default ResumeCvModal
