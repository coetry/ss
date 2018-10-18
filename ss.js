/* a tool for cleaning up screenshots 
 * by placing them all in a directory */

const fs = require('fs')

function SS () {
  const path = process.argv[2]
  const ssDir = `${path}/Screenshots`
  
  if (!path ) throw new Error('Please provide a path')
 
  fs.readdir(path, (error, files) => {
    if (error) throw (err)
    const screenshots = files.filter(f => f.includes('Screen\ Shot'))
    console.log(`# of screenshots: ${screenshots.length}`)
    fs.mkdir(ssDir, error => {
      if (error) throw error
      screenshots.forEach(ss => {
        fs.rename(`${path}/${ss}`, `${ssDir}/${ss}`, error => {
          if (error) throw error
        })
      })
    })
  })
}

SS()

