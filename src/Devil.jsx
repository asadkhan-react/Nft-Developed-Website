import React , {useState} from 'react';
import GalleryData from './GalleryData';
import './index.css';


function Devil(){

    const [itemsFilter, setItemsFilter] = useState("")
    const [branchFilter, setBranchFilter] = useState("")
 
    const filterData = () =>{
        if(itemsFilter !== ""){
            const anyvariable = GalleryData.filter(item => item.category === itemsFilter)
            if(branchFilter !== ''){
                return anyvariable.filter(item => item.tag === branchFilter) 
            }else{
                return anyvariable;
            }
        }else{
            return GalleryData;
        }

    }

    return(
        <>
            <div className='menu-tabs container'>
                    <h5 className='text-white'>Select First Angel Filter</h5>
                <div className='filter-buttons mobile-filter-class d-flex d-grid gap-3 justify-content-between'>
                    <div className='mobile-filter-container'>
                            <div className='filter-buttons mobile-filter-buttons d-flex d-grid gap-3 '>
                                <button className={`btn text-white ${itemsFilter === '' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setItemsFilter("")}>All</button>
                                <button className={`btn text-white ${itemsFilter === 'breakfast' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setItemsFilter('breakfast')}>Breakfast</button>
                                <button className={`btn text-white ${itemsFilter === 'evening' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setItemsFilter('evening')}>Evening</button>
                                <button className={`btn text-white ${itemsFilter === 'dinner' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setItemsFilter('dinner')}>Dinner</button>
                                <button className={`btn text-white ${itemsFilter === 'lunch' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setItemsFilter('lunch')}>Lunch</button>
                            </div>

                            
                                <div className='filter-buttons d-flex  mobile-filter-buttons align-items-end d-flex d-grid gap-3'>
                                    <button className={`btn mobile-width text-white ${itemsFilter === 'lunch' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setItemsFilter('lunch')}>Lunch</button>
                                    <button className={`btn mobile-width text-white ${itemsFilter === 'breakfast' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setItemsFilter('breakfast')}>Breakfast</button>
                                    <button className={`btn mobile-width text-white ${itemsFilter === 'evening' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setItemsFilter('evening')}>Evening</button>
                                    <button className={`btn mobile-width text-white ${itemsFilter === 'dinner' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setItemsFilter('dinner')}>Dinner</button>
                                    <button className={`btn mobile-width text-white ${itemsFilter === 'lunch' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setItemsFilter('lunch')}>Lunch</button>
                                </div>
                            
                    </div>
                    
                    <div className='option-heading text-white'>
                            <div >
                                <h5 className='text-white'>Options </h5>
                            </div>
                            <select className='bg-danger btn btn-outline-danger text-white'>
                                <option className='bg-danger text-white'>Option 1</option>
                                <option className='bg-danger text-white'>Option 2</option>
                                <option className='bg-danger text-white'>Option 3</option>
                                <option className='bg-danger text-white ' >Option 4</option>
                                <option className='bg-danger text-white ' >Option 5</option>
                                <option className='bg-danger text-white ' >Option 6</option>
                                <option className='bg-danger text-white ' >Option 7</option>
                                <option className='bg-danger text-white ' >Option 8</option>
                            </select>
                        
                    </div>

                </div>           

                <div>
                    <h5 className='text-white'>Select Second Filter</h5>
                    <div className='filter-buttons mobile-filter-buttons some-unique-width d-flex d-grid gap-3'>
                        <button className={`btn text-white  ${branchFilter === 'angel' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setBranchFilter('angel')}>Angel</button>
                        <button className={`btn text-white  ${branchFilter === 'devil' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setBranchFilter('devil')}>Devil</button>
                        <button className={`btn text-white  ${branchFilter === 'war' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setBranchFilter('war')}>War</button>
                        <button className={`btn text-white  ${branchFilter === 'weapon' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setBranchFilter('weapon')}>Weapon</button> 
                        <button className={`btn text-white  ${branchFilter === '' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setBranchFilter("")}>Clear</button>
                    </div>
                </div>
            </div>

            {/* Main Section */}
                <div  className='container  store-gallery'>
                    <div className='row mt-5 gx-4 gy-4'>
                        {
                            filterData().map((parameter) => 
                                    (
                                    
                                    <div className='Col-lg-4 col-md-4  col-10 col-xxl-4'> 
                                        <div class="card" style={{width: '18rem',}}>  
                                            <img src={parameter.imageName} className='img-fluid' /> 
                                            <div class="card-body text-white">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="btn btn-danger">Go To Store</a>
                                            </div>   
                                        </div>        
                                    </div>
                                    
                                )
                            )                        
                        }
                    </div>

                </div>
            
                        
               
         
        </>
    )
}

export default Devil;