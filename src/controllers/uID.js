import { v4 as uuidv4, parse } from 'uuid'

const uID = () => {
  let uuid = uuidv4()
  let parsedUuid = parse(uuid)
  let buffer = Buffer.from(parsedUuid)
  let randInt = buffer.readUInt32BE(0)
  return randInt
}

export default uID
