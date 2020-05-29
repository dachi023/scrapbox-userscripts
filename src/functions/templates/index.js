const SCRAPBOX_TEMPLATES = [{ label: 'Example template', template: require('./example.txt') }]

const MENU_ICON_IMAGE = '/assets/img/logo.png'
const MENU_TITLE = 'template'

module.exports = () => {
  scrapbox.PageMenu.addMenu({ title: MENU_TITLE, image: MENU_ICON_IMAGE, onClick: () => {} })

  SCRAPBOX_TEMPLATES.forEach(({ label, template }) => {
    scrapbox.PageMenu(MENU_TITLE).addItem({
      title: label,
      onClick: () => {
        const input = document.querySelector('#text-input')
        const value = input.value
        input.value = value + (value.length < 1 ? template : `\n\n${template}`)

        const event = document.createEvent('Event')
        event.initEvent('input', true, true)
        input.dispatchEvent(event)
      },
    })
  })
}
