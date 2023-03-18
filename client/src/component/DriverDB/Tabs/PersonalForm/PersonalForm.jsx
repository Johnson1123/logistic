import React, { useEffect, useState } from 'react'
import { BiCloudUpload, BiUpload } from 'react-icons/bi'
import { MdOutlineEdit } from 'react-icons/md'
import { images } from '../../../../asset'
import TabInput from '../../../Tabs/TabInput/TabInput'
import SignupBtn from '../../../Btn/SignupBtn/SignupBtn'
import './PersonalForm.scss'

function PersonalForm() {

        const [selectedFile, setSelectedFile] = useState()
        const [preview, setPreview] = useState()
    
        // create a preview as a side effect, whenever selected file is changed
        useEffect(() => {
            if (!selectedFile) {
                setPreview(undefined)
                return
            }
    
            const objectUrl = URL.createObjectURL(selectedFile)
            setPreview(objectUrl)
    
            // free memory when ever this component is unmounted
            return () => URL.revokeObjectURL(objectUrl)
        }, [selectedFile])
    
        const onSelectFile = e => {
            if (!e.target.files || e.target.files.length === 0) {
                setSelectedFile(undefined)
                return
            }
    
            // I've kept this example simple by using the first image instead of multiple
            setSelectedFile(e.target.files[0])
        }
  return (
    <div className='PersonalForm flex'>
        <div className='img__control'>
            <div className='img__con'>
                {selectedFile ?  <img src={preview} /> : <img src={images.James} /> }
            </div>
            <input type='file' id="img-upload" onChange={onSelectFile} />
            <label htmlFor="img-upload" className="custom-upload flex center p-text fw-500"><MdOutlineEdit /></label>
            
        </div>
        <form className="personal__form">
            <div className="input__group">
                <TabInput type='text' label='First Name' placeholder='James' name='Fname' />
                <TabInput type='text' label='Last Name' placeholder='Williams' name='Lname' />
            </div>
            <div className="input__group">
                <TabInput type='email' label='Email' placeholder='jameswilliams@gmail.com' name='email' />
                <TabInput type='tel' label='Phone number' placeholder='+33758336521' name='phone' />
            </div>
            <div className="input__group group__detail">
                <p className="small-title">Driver documents</p>
                <p className="bold-text">Driver and taxi license details. Keep an eye on expiration dates.</p>
            </div>
            <div className="input__group">
                <TabInput type='text' label='Driver license number' placeholder='960978300034' name='email' />
                <TabInput type='text' label='Driver license expires' placeholder='18.01.2033' name='phone' />
            </div>
            <SignupBtn label='Save' />
        </form>
    </div>
  )
}
export default PersonalForm