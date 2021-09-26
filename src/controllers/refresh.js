const refresh = async (timeout) => {
  timeout = timeout * 1000 ?? 6000000
  console.log(timeout)
  setTimeout(() => window.location.reload(true), timeout)
}

export default refresh
