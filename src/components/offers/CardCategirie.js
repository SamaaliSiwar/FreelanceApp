import React from 'react'

export default function CardCategirie() {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-full">
    <div
         class="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
         style={{minHeight:'160px'}}
         >
      <div class="w-16 h-16 bg-gray-100 rounded-lg">
        <img alt="" src="data:image/jpeg;base64,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"></img>
      </div>
  
      <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
        Web developpment
      </h2>
    </div>
  
    <div
         class="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
         style={{minHeight:'160px'}}
         >
      <div class="w-16 h-16 bg-gray-100 rounded-lg">
        <img alt="" src='data:image/png;base64,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'/>
      </div>
  
      <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
        web design
      </h2>
    </div>
  
    <div
         class="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
         style={{minHeight:'160px'}}
         >
      <div class="w-16 h-16 bg-gray-100 rounded-lg">
        <img alt="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIG5BjG_8JCydTMgyE2lL9MbOyVurAo-LSB6PiL-wQ59LC1C-jer7xdbQ444fmvQ_2QaU&usqp=CAU' />
      </div>
  
      <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
        design graphique
      </h2>
    </div>
  
    <div
         class="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
         style={{minHeight:'160px'}}
         >
      <div class="w-16 h-16 bg-gray-100 rounded-lg">
        <img alt="" src='https://cdn-icons-png.flaticon.com/512/3163/3163550.png'/>
      </div>
  
      <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
        Traduction
      </h2>
    </div>
  
    <div
         class="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
         style={{minHeight:'160px'}}
         >
      <div class="w-16 h-16 bg-gray-100 rounded-lg">
        <img alt="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqyDlNt3clxLttqhzVTHTNvNiklbTDBlvaDQ&usqp=CAU' />
      </div>
  
      <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
        Blogs
      </h2>
    </div>
  
    <div
         class="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
         style={{minHeight:'160px'}}
         >
      <div class="w-16 h-16 bg-gray-100 rounded-lg">
        <img alt="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lB7jc_DpFerH_zb89kXWgSK5a4FxvQQ6zzjrX3n4rIkVq-cb2j7Tx68VBV34gwoypao&usqp=CAU'/>
      </div>
  
      <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
        Education
      </h2>
    </div>
  </div>
  )
}
