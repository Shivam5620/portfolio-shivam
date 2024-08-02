import React from 'react'

const AddressMap = () => {
  return (
    <div className='my-5'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.659052150904!2d75.8649982740398!3d21.986044854215105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd87eea09bd53cb%3A0x89d90b1f92904cb7!2sKhargone%20-%20Sanawad%20Rd%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1722586863748!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )
}

export default AddressMap