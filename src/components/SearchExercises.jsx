import React,{useEffect,useState} from 'react'
import { Box, Button, Stack, Typography, TextField } from '@mui/material'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {

  const [search, setSearch] = useState('')
  
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions)
      setBodyParts(['all',...bodyPartsData])
    }
    fetchExercisesData()
  },[])


  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions)
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('')
      setExercises(searchedExercises)
    }
    window.scrollTo({ top: 1000, behavior: 'smooth' })
    console.log('scroll')

  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={720} sx={{fontSize:{lg:'48px', color: '#e2e4e9', xs:'30px'}}} mb='50px' textAlign='center'>
        Awesome Exercises <br/> You Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', color: '#e2e4e9', borderRadius: '40px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#374151',
            borderRadius:'40px'
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />
        <Button className='search-btn'
          sx={{
            bgcolor: '#2563eb',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20', xs: '18px' },
            height: '56px',
            borderRadius:'40px',
            position: 'absolute',
            right:0
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts={ true} />
      </Box>
    </Stack>
  )
}

export default SearchExercises