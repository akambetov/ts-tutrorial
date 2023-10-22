type TUser = {
  name: string,
  displayName: string | null
}

function assertDisplayName(user: TUser): asserts user is TUser & { displayName: string } {
  if (!user.displayName) throw new Error('User has no displayName')
}

function logUserByDisplayName(user: TUser): void {
    assertDisplayName(user)

    console.log(user.displayName.toUpperCase())
}

logUserByDisplayName({name:'a', displayName: 'asd'})