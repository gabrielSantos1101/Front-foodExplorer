/* eslint-disable prettier/prettier */
import React, { useCallback, useState } from 'react'
import Cropper from 'react-easy-crop'
import { toast } from 'react-toastify'
import getCroppedImg from '../../utils/Crop'
import { Button } from '../Button'
import { Slider } from '../Slider'
import {
  Wrap,
} from './styles'

export function CropImage({ image, setImage, setOpenModal }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation
      );

      setImage(croppedImage);
      toast.success('Comcluido')
      setOpenModal(false)
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation, image]);


  
  return (
    <Wrap>
        {/* <Cropper
          image={imagePreview}
          crop={crop}
          rotation={rotation}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
          cropShape="round"
        />
         */}
        <div className="crop-container">
          <Cropper
            image={image}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            zoomSpeed={4}
            maxZoom={3}
            zoomWithScroll={false}
            showGrid={true}
            aspect= {1 / 1}
            cropShape='round'
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            onRotationChange={setRotation}
          />
        </div>
        <div className="controls">
          <div className="sliders">
            <label>
              Rotação
              <Slider setValue={setRotation} max={360} step={1}/>
            </label>
            <label>
              Zoom
              <Slider  setValue={setZoom} min={1}  max={2} step={0.01}/>
            </label>
          </div>
          
          <div className='buttons'>
          <Button title={'Cancelar'} onClick={() => setOpenModal(false)}/>
          <Button title={'Salvar'} onClick={showCroppedImage}/>
        </div>
        </div>
    </Wrap>
  )
}
