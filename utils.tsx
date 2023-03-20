import _ from 'lodash'
import { NextResponse } from 'next/server'
import { inspect } from 'node:util'

const cxFlatten = (from, to = []) => {
  if (typeof from === 'string' || from instanceof String)
    to.push(from)
  else if (from && typeof from === 'object')
    if (typeof from[Symbol.iterator] === 'function')
      for (const item of from)
        cxFlatten(item, to)
    else if (from.className)
      to.push(from.className)
    else
      for (const key in from)
        if (from[key])
          to.push(key)
  return to
}

export const cx = (...args) => cxFlatten(args).join(' ')

export const cxInject = (props, ...classNames) => ({
  ...props,
  className: cx(props.className, ...classNames),
})

export const log = (...args) => (console.log(...args), args[0])

const dateRuConfig = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
} as any

export const toLocaleStringRu = date => {
  if (date instanceof Date)
    return date.toLocaleString('ru-RU', dateRuConfig)
  else
    return new Date(date).toLocaleString('ru-RU', dateRuConfig)
}

export const ltreeNest = (arr, key) => {
  const ltree = {}
  arr.forEach(value => value.id && _.updateWith(
    ltree,
    value.id.replace(/\./g, '.' + key + '.'),
    v => _.merge(v, value),
    Object,
  ))
  return ltree
}

export const sleep = async ms => await new Promise(r => setTimeout(r, ms))

export const apiRedirect = req => (path, params, hash?) => {
  const url = new URL(path, req.headers.get('origin') || req.url)
  for (const key in params)
    if (params[key] instanceof Error)
      url.searchParams.set(key, String(params[key]))
    else if (typeof params[key] === 'object' && params[key])
      url.searchParams.set(key, JSON.stringify(params[key]))
    else
      url.searchParams.set(key, String(params[key]))
  if (hash !== undefined)
    url.hash = hash
  return NextResponse.redirect(url)
}


export const jsonParse = value => {
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}