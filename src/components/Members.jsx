import { useState }  from 'react'
import { Link,useSearchParams } from 'react-router-dom'

function Members() {
  const [members, setMembers] = useState('')
  const [filter, setFilter] = useState('')
  const[searchparam,setSearchParam]= useSearchParams()
  const filterBtn = () => {  
    const activeMember = searchparam.get('filter')
    activeMember ? setFilter(activeMember): setFilter('')
    
  }
  const reset=()=>{
    setSearchParam('')
    setMembers('')
    setFilter('')
  }
  const search=()=>{
    members ? setSearchParam({filter:members}):alert('HATA!Arama yapacağınız kelimeyi girmediniz')
  }
  return (
    <> 
    <h1>Members</h1>
    <div >
      <h3 className='danger'>{filter!=='' ? `Filtre : ${filter}`:`Arama yapacağınız kelimeyi giriniz`}</h3>
      <input className='input' type="text" value={members} onChange={(e)=>setMembers(e.target.value)} />
      <button className='btn' onClick={search}>Ara</button>
      <button className='btn' onClick={filterBtn}>Aktif Filtre</button>
      <button className='btn' onClick={reset}>Temizle</button>
    </div>
    <nav className='innerLink'>
         <ul>
            <li>
                <Link to="1">Pirveli</Link>
                <Link to="2">Emin</Link>
            </li>
       </ul>
    </nav>
   
    </>
   
  )
}

export default Members