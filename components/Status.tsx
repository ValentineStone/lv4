export const Status = (
  status = 'green',
  comment = '',
  time = null
) =>
  <section className="flex duo highlight">
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img style={{ height: '1.5em', marginRight: '0.5em' }} src={`/status-${status}.svg`} />
      {comment}
    </div>
    <div className="disabled" style={{ display: 'flex', alignItems: 'center' }}>
      {time}
    </div>
  </section>